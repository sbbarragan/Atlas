import { createContext } from 'react';

const reduxContext = createContext();

const constants = {
  NoFound: 'No found',
  reduxContext
};

export default { ...constants };
