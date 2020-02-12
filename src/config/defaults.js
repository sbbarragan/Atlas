const default2FAOpennebulaVar = 'TWO_FACTOR_AUTH_SECRET';
module.exports = {
  httpMethod: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
  },
  from: {
    resource: 'RESOURCE',
    query: 'QUERY',
    postBody: 'POST_BODY'
  },
  defaultOpennebulaZones: [
    {
      ID: 0,
      RPC: 'http://localhost:2633/RPC2',
      VNC: ''
    }
  ],
  defaultConfigFile: `${__dirname}/../config.yml`,
  defaultBaseURL: '',
  defaultMode: 'development',
  defaultNamespace: 'one.',
  defaultMessageInvalidZone: 'Invalid Zone',
  default2FAIssuer: 'sunstone-UI',
  default2FAOpennebulaVar,
  default2FAOpennebulaTmpVar: `TMP_${default2FAOpennebulaVar}`,
  defaultGetMethod: 'info',
  defaultMessageProblemOpennebula: 'Problem with conection or xml parser',
  defaultMethodLogin: 'user.login',
  defaultMethodUserUpdate: 'user.update',
  defaultMethodUserInfo: 'user.info',
  defaultLang: 'en_US',
  translations: {
    en_US: 'English',
    ca: 'Catalan',
    cs_CZ: 'Czech',
    nl_NL: 'Dutch',
    da: 'Danish',
    fr_FR: 'French',
    de: 'German',
    it_IT: 'Italian',
    js: 'Japanese',
    lt_LT: 'Lithuanian',
    fa_IR: 'Persian',
    pl: 'Polish',
    pt_BR: 'Portiguese',
    pt_PT: 'Portuguese',
    tr_TR: 'Turkish',
    ru_RU: 'Russian',
    zh_CN: 'Simplified Chinese',
    sk_SK: 'Slovak',
    es_ES: 'Spanish'
  }
};
