module.exports = {
  httpMethod: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
  },
  defaultOpennebulaZones: [
    {
      ID: 0,
      RPC: 'http://localhost:2633/RPC2',
      VNC: ''
    }
  ],
  defaultMode: 'development',
  defaultNamespace: 'one.',
  defaultMessageInvalidZone: 'Invalid Zone',
  defaultGetMethod: 'info',
  defaultMessageProblemOpennebula: 'Problem with conection or xml parser',
  defaultMethodLogin: 'user.login',
  defaultMethodUserUpdate: 'user.update',
  defaultMethodUserInfo: 'user.info'
};
