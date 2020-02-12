module.exports = (
  { resource, postBody, query },
  { GET, POST, PUT, DELETE }
) => ({
  'group.allocate': {
    // inspected
    httpMethod: POST,
    params: {
      name: {
        from: postBody,
        default: ''
      }
    }
  },
  'group.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'group.info': {
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
  'group.update': {
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
  'group.addadmin': {
    // inspected
    httpMethod: POST,
    params: {
      id: {
        from: resource,
        default: 0
      },
      user: {
        from: postBody,
        default: 0
      }
    }
  },
  'group.deladmin': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      user: {
        from: postBody,
        default: 0
      }
    }
  },
  'group.quota': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      template: {
        from: resource,
        default: ''
      }
    }
  },
  'grouppool.info': {
    // inspected
    httpMethod: GET,
    params: {}
  },
  'groupquota.info': {
    // inspected
    httpMethod: GET,
    params: {}
  },
  'groupquota.update': {
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
