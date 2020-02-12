module.exports = (
  { resource, postBody, query },
  { GET, POST, PUT, DELETE }
) => ({
  'cluster.allocate': {
    // inspected
    httpMethod: PUT,
    params: {
      name: {
        from: postBody,
        default: ''
      }
    }
  },
  'cluster.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'cluster.update': {
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
  'cluster.addhost': {
    // inspected
    httpMethod: POST,
    params: {
      id: {
        from: resource,
        default: 0
      },
      host: {
        from: postBody,
        default: 0
      }
    }
  },
  'cluster.delhost': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      host: {
        from: query,
        default: 0
      }
    }
  },
  'cluster.adddatastore': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      datastore: {
        from: postBody,
        default: 0
      }
    }
  },
  'cluster.deldatastore': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      datastore: {
        from: postBody,
        default: 0
      }
    }
  },
  'cluster.addvnet': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      vnet: {
        from: postBody,
        default: 0
      }
    }
  },
  'cluster.delvnet': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      vnet: {
        from: postBody,
        default: 0
      }
    }
  },
  'cluster.rename': {
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
  'cluster.info': {
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
  'clusterpool.info': {
    // inspected
    httpMethod: GET,
    params: {}
  }
});
