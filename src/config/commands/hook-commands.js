module.exports = (
  { resource, postBody, query },
  { GET, POST, PUT, DELETE }
) => ({
  'hook.allocate': {
    // inspected
    httpMethod: POST,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'hook.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'hook.update': {
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
      },
      replace: {
        from: postBody,
        default: 0
      }
    }
  },
  'hook.rename': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      name: {
        from: postBody,
        default: ''
      }
    }
  },
  'hook.info': {
    // inspected
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      },
      decrypt: {
        from: postBody,
        default: false
      }
    }
  },
  'hook.lock': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      lock: {
        from: postBody,
        default: 4
      }
    }
  },
  'hook.unlock': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'hook.retry': {
    // inspected
    httpMethod: POST,
    params: {
      id: {
        from: resource,
        default: 0
      },
      execution: {
        from: postBody,
        default: 0
      }
    }
  },
  'hookpool.info': {
    // inspected
    httpMethod: GET,
    params: {
      filter: {
        from: query,
        default: -1
      },
      start: {
        from: query,
        default: -1
      },
      end: {
        from: query,
        default: -1
      }
    }
  },
  'hooklog.info': {
    // inspected
    httpMethod: GET,
    params: {
      minimun: {
        from: postBody, // epoch time
        default: ''
      },
      maximun: {
        from: postBody, // epoch time
        default: ''
      },
      id: {
        from: postBody,
        default: '' // check
      },
      execution: {
        from: postBody,
        default: 0
      }
    }
  }
});
