import axios from 'axios';
import root from 'window-or-global';
import constants from '../constants';
import { messageTerminal } from '../../utils/general-functions';

export const storage = (name = '', data = '', keepData = false) => {
  if (name && data && localStorage && sessionStorage) {
    if (keepData && localStorage.setItem) {
      localStorage.setItem(name, data);
    } else if (sessionStorage.setItem) {
      sessionStorage.setItem(name, data);
    }
  }
};

export const removeStoreData = (items = []) => {
  let itemsToRemove = items;
  if (!Array.isArray(items)) {
    itemsToRemove = [items];
  }
  itemsToRemove.forEach(e => {
    localStorage.removeItem(e);
    sessionStorage.removeItem(e);
  });
};

export const findStorageData = (name = '') => {
  let rtn = false;
  if (localStorage && sessionStorage && name) {
    if (localStorage.getItem) {
      rtn = localStorage.getItem(name);
    } else if (sessionStorage.getItem) {
      rtn = sessionStorage.getItem(name);
    }
  }
  return rtn;
};

export const requestData = (
  url = '',
  params = {
    method: 'GET',
    json: true,
    data: {},
    authenticate: true,
    onUploadProgress: null,
    baseURL: '',
    error: e => e
  }
) => {
  const config = {
    url,
    method: params.method,
    baseURL: params.baseURL || root.baseURL,
    headers: {},
    validateStatus: status => status >= 200 && status <= 401
  };
  const { jwtName } = constants;
  const json = params.json ? params.json : true;
  let rtn = null;
  if (json) {
    config.headers['Content-Type'] = 'application/json';
  }
  if (params.data && params.method.toUpperCase() !== 'GET') {
    config.data = params.data;
  }

  if (
    params.onUploadProgress &&
    typeof params.onUploadProgress === 'function'
  ) {
    config.onUploadProgress = params.onUploadProgress;
  }

  if (params.authenticate && findStorageData && findStorageData(jwtName)) {
    config.headers.Authorization = `Bearer ${findStorageData(jwtName)}`;
  }

  return axios
    .request(config)
    .then(response => {
      if (response && response.statusText) {
        rtn = json && typeof response === 'string' ? response.json() : response;
        return rtn;
      }
      throw Error(response.statusText);
    })
    .catch(e => {
      const configErrorParser = {
        color: 'red',
        type: e,
        message: 'Error request: %s'
      };
      messageTerminal(configErrorParser);
      return params.error(rtn);
    });
};
