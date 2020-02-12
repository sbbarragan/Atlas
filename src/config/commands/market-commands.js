module.exports = (
  { resource, postBody, query },
  { GET, POST, PUT, DELETE }
) => ({
  'market.allocate': {
    // inspected
    httpMethod: POST,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'market.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'market.update': {
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
        default: 0
      }
    }
  },
  'market.chmod': {
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
  'market.chown': {
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
  'market.rename': {
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
  'market.info': {
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
  'marketpool.info': {
    // inspected
    httpMethod: GET,
    params: {}
  },
  'marketapp.allocate': {
    // inspected
    httpMethod: PUT,
    params: {
      template: {
        from: postBody,
        default: ''
      },
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'marketapp.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'marketapp.enable': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      enable: {
        from: postBody,
        default: true
      }
    }
  },
  'marketapp.update': {
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
  'marketapp.chmod': {
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
  'marketapp.chown': {
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
  'marketapp.rename': {
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
  'marketapp.info': {
    // inspected
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: -1
      }
    }
  },
  'marketapp.lock': {
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
  'marketapp.unlock': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'marketapppool.info': {
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
