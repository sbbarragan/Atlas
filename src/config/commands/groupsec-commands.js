module.exports = (
  { resource, postBody, query },
  { GET, POST, PUT, DELETE }
) => ({
  'secgroup.allocate': {
    // inspected
    httpMethod: POST,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'secgroup.clone': {
    // inspected
    httpMethod: POST,
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
  'secgroup.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'secgroup.update': {
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
  'secgroup.commit': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      vms: {
        from: postBody,
        default: false
      }
    }
  },
  'secgroup.chmod': {
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
  'secgroup.chown': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      user: {
        from: postBody,
        default: -1
      },
      group: {
        from: postBody,
        default: -1
      }
    }
  },
  'secgroup.rename': {
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
  'secgroup.info': {
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
  'secgrouppool.info': {
    // inspected
    httpMethod: GET,
    params: {
      filter: {
        from: query,
        default: -3
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
