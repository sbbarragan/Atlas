module.exports = ({ resource, postBody, query }, { GET, PUT, DELETE }) => ({
  'host.allocate': {
    // inspected
    httpMethod: PUT,
    params: {
      hostname: {
        from: postBody,
        default: ''
      },
      information: {
        from: postBody,
        default: ''
      },
      manager: {
        from: postBody,
        default: ''
      },
      cluster: {
        from: postBody,
        default: -1
      }
    }
  },
  'host.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'host.status': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      status: {
        from: postBody,
        default: 0
      }
    }
  },
  'host.update': {
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
  'host.rename': {
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
  'host.info': {
    // inspected
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      },
      decrypt: {
        from: query,
        default: false
      }
    }
  },
  'host.monitoring': {
    // inspected
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'hostpool.info': {
    // inspected
    httpMethod: GET,
    params: {}
  },
  'hostpool.monitoring': {
    // inspected
    httpMethod: GET,
    params: {}
  }
});
