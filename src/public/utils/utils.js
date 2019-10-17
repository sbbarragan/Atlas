import axios from 'axios';
import root from 'window-or-global';
import constants from '../constants';
import { messageTerminal } from '../../utils/general-functions';

export const storage = (name = '', data = '', keepData = false) => {
  if (name && data && root && root.localStorage && root.sessionStorage) {
    if (keepData && root.localStorage.setItem) {
      root.localStorage.setItem(name, data);
    } else if (root.sessionStorage.setItem) {
      root.sessionStorage.setItem(name, data);
    }
  }
};

export const removeStoreData = (items = []) => {
  let itemsToRemove = items;
  if (!Array.isArray(items)) {
    itemsToRemove = [items];
  }
  itemsToRemove.forEach(e => {
    if (root && root.localStorage && root.sessionStorage) {
      root.localStorage.removeItem(e);
      root.sessionStorage.removeItem(e);
    }
  });
};

export const findStorageData = (name = '') => {
  let rtn = false;
  if (root && root.localStorage && root.sessionStorage && name) {
    if (root.localStorage.getItem && root.localStorage.getItem(name)) {
      rtn = root.localStorage.getItem(name);
    } else if (
      root.sessionStorage.getItem &&
      root.sessionStorage.getItem(name)
    ) {
      rtn = root.sessionStorage.getItem(name);
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
      if (response && response.statusText && response.data) {
        rtn =
          json && typeof response === 'string'
            ? response.data.json()
            : response.data;
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
