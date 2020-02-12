module.exports = (
  { resource, postBody, query },
  { GET, POST, PUT, DELETE }
) => ({
  'user.allocate': {
    // inspected
    httpMethod: POST,
    params: {
      username: {
        from: postBody,
        default: 0
      },
      password: {
        from: postBody,
        default: ''
      },
      driver: {
        from: postBody,
        default: ''
      },
      group: {
        from: postBody,
        default: []
      }
    }
  },
  'user.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'user.passwd': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      password: {
        from: postBody,
        default: ''
      }
    }
  },
  'user.login': {
    // inspected
    httpMethod: POST,
    params: {
      user: {
        from: postBody,
        default: ''
      },
      token: {
        from: postBody,
        default: ''
      },
      expire: {
        from: postBody,
        default: 0
      },
      gid: {
        from: postBody,
        default: -1
      }
    }
  },
  'user.update': {
    // inspected
    httpMethod: POST,
    params: {
      id: {
        from: resource,
        default: 0
      },
      template: {
        from: postBody,
        default: ''
      },
      update: {
        from: postBody,
        default: 1
      }
    }
  },
  'user.chauth': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: postBody,
        default: 0
      },
      driver: {
        from: postBody,
        default: ''
      },
      password: {
        from: postBody,
        default: ''
      }
    }
  },
  'user.quota': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'user.chgrp': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      group: {
        from: postBody,
        default: 0
      }
    }
  },
  'user.addgroup': {
    // inspected
    httpMethod: POST,
    params: {
      id: {
        from: resource,
        default: 0
      },
      group: {
        from: postBody,
        default: ''
      }
    }
  },
  'user.delgroup': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      group: {
        from: query,
        default: 0
      }
    }
  },
  'user.info': {
    // inspected
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: -1
      },
      decrypt: {
        from: query,
        default: false
      }
    }
  },
  'userpool.info': {
    // inspected
    httpMethod: GET,
    params: {}
  },
  'userquota.info': {
    // inspected
    httpMethod: GET,
    params: {}
  },
  'userquota.update': {
    // inspected
    httpMethod: PUT,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  }
});
