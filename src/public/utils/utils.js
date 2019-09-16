import moment from 'moment';

export const validateInput = (value, type, min, max) => {
  switch (type) {
    case 'email': {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(value.toLowerCase());
    }
    case 'password': {
      return value.length >= min && value.length <= max;
    }
    case 'text': {
      return value.length >= min && value.length <= max;
    }
    case 'without-special-chars': {
      const re = /^[a-zA-Z0-9_]*$/;
      return (
        re.test(value.toLowerCase()) &&
        value.length >= min &&
        value.length <= max
      );
    }
    case 'url': {
      const re = /^(http|https):\/\/[^ "]+$/;
      return re.test(value.toLowerCase());
    }
    case 'credit-number': {
      return Payment.fns.validateCardNumber(value);
    }
    case 'credit-expiry': {
      return Payment.fns.validateCardExpiry(value);
    }
    case 'credit-cvc': {
      return Payment.fns.validateCardCVC(value);
    }
    case 'date': {
      const fecha = new Date(value.ano, value.mes, value.dia);
      return (
        fecha.getDate() === parseInt(value.dia, 0) &&
        (parseInt(value.dia, 0) >= min.dia &&
          parseInt(value.dia, 0) <= max.dia) &&
        (fecha.getMonth() === parseInt(value.mes, 0) &&
          (parseInt(value.mes, 0) <= min.mes &&
            parseInt(value.mes, 0) >= min.mes)) &&
        (fecha.getFullYear() === parseInt(value.ano, 0) &&
          (parseInt(value.ano, 0) >= min.ano &&
            parseInt(value.ano, 0) <= max.ano))
      );
    }
    case 'boolean': {
      return value === min;
    }
    default:
      return false;
  }
};

export const validateEmptyObject = (obj = {}) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export const fetchData = (
  url,
  params = {
    method: 'GET',
    json: false,
    body: {},
    error: null,
    header: {},
    error: e => e
  }
) => {
  const headers = {
    method: params.method,
    credentials: 'include',
    headers: {
      Accept: 'application/json'
    }
  };
  const json = params.json ? params.json : false;

  if (json) {
    headers.headers['Content-Type'] = 'application/json';
  }
  if (params.body && params.method.toUpperCase() !== 'GET') {
    headers.body = params.body;
  }
  if (params.header) {
    headers.headers = Object.assign(headers.headers, params.header);
  }
  return fetch(url, headers)
    .then(response => {
      if (response.ok) {
        return json ? response.json() : response;
      }
      throw Error(response.statusText);
    })
    .then(response => response)
    .catch(e => {
      console.log(`ERROR! ${e}`);
      return params.error;
    });
};

export const headerAutenticate = () => ({
  Authorization: `Bearer ${localStorage.getItem('token')}`
});

export const fetchValidateAuthenticatedUser = () =>
  fetchData(ABOUT_ME, {
    method: 'GET',
    json: true,
    header: headerAutenticate()
  }).then(response => response || null);

export const storage = (name, data) => localStorage.setItem(name, data);

export const removeStoreData = (items = []) => {
  items.forEach(e => {
    localStorage.removeItem(e);
  });
};

export const validateStorage = () => typeof localStorage !== undefined;

export const uploadFile = (url, files, error) =>
  fetchData(url, {
    method: 'POST',
    error,
    body: files,
    json: true
  }).then(response => response.json());

export const addDataURL = (url = '', replace = '', find = '%ID%') =>
  url.replace(find, replace);

export const iff = (condition, then, otherwise) =>
  condition ? then : otherwise;
