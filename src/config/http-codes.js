const httpCodes = {
  badRequest: {
    id: 400,
    message: 'Bad Request'
  },
  unauthorized: {
    id: 401,
    message: 'Unauthorized'
  },
  methodNotAllowed: {
    id: 405,
    message: 'Method not Allowed'
  },
  internalServerError: {
    id: 500,
    message: 'Internal Server Error'
  },
  serviceUnavailable: {
    id: 503,
    message: 'Service Unavailable'
  },
  ok: {
    id: 200,
    message: 'OK'
  }
};

module.exports = httpCodes;
