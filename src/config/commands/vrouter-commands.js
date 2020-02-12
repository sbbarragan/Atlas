module.exports = (
  { resource, postBody, query },
  { GET, POST, PUT, DELETE }
) => ({
  'vrouter.allocate': {
    // inspected
    httpMethod: POST,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'vrouter.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      images: {
        from: query,
        default: false
      }
    }
  },
  'vrouter.instantiate': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      number: {
        from: postBody,
        default: 1
      },
      template_id: {
        from: postBody,
        default: 0
      },
      name: {
        from: postBody,
        default: ''
      },
      pending: {
        from: postBody,
        default: false
      },
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'vrouter.attachnic': {
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
  'vrouter.detachnic': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      nic: {
        from: postBody,
        default: 0
      }
    }
  },
  'vrouter.update': {
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
      update: {
        from: postBody,
        default: 1
      }
    }
  },
  'vrouter.chmod': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      user_use: {
        from: postBody,
        default: -1
      },
      user_manage: {
        from: postBody,
        default: -1
      },
      user_admin: {
        from: postBody,
        default: -1
      },
      group_use: {
        from: postBody,
        default: -1
      },
      group_manage: {
        from: postBody,
        default: -1
      },
      group_admin: {
        from: postBody,
        default: -1
      },
      other_use: {
        from: postBody,
        default: -1
      },
      other_manage: {
        from: postBody,
        default: -1
      },
      other_admin: {
        from: postBody,
        default: -1
      }
    }
  },
  'vrouter.chown': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      user_id: {
        from: postBody,
        default: -1
      },
      group_id: {
        from: postBody,
        default: -1
      }
    }
  },
  'vrouter.rename': {
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
  'vrouter.info': {
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
  'vrouter.lock': {
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
  'vrouter.unlock': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vrouterpool.info': {
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
  }
});
