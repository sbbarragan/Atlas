const { httpMethod } = require('../config/defaults');

const from = {
  resource: 'RESOURCE',
  query: 'QUERY',
  postBody: 'POST_BODY'
};
const { resource, postBody, query } = from;
const { GET, POST, PUT, DELETE } = httpMethod;

const commandsParams = {
  'template.allocate': {
    // inspected
    httpMethod: PUT,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'template.clone': {
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
      },
      image: {
        from: postBody,
        default: false
      }
    }
  },
  'template.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      image: {
        from: query,
        default: false
      }
    }
  },
  'template.instantiate': {
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
      },
      pending: {
        from: postBody,
        default: false
      },
      template: {
        from: postBody,
        default: ''
      },
      image: {
        from: postBody,
        default: false
      }
    }
  },
  'template.update': {
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
  'template.chmod': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userUse: {
        from: postBody,
        default: -1
      },
      userManage: {
        from: postBody,
        default: -1
      },
      userAdmin: {
        from: postBody,
        default: -1
      },
      groupUse: {
        from: postBody,
        default: -1
      },
      groupManage: {
        from: postBody,
        default: -1
      },
      groupAdmin: {
        from: postBody,
        default: -1
      },
      otherUse: {
        from: postBody,
        default: -1
      },
      otherManage: {
        from: postBody,
        default: -1
      },
      otherAdmin: {
        from: postBody,
        default: -1
      },
      image: {
        from: postBody,
        default: false
      }
    }
  },
  'template.chown': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userId: {
        from: postBody,
        default: -1
      },
      groupId: {
        from: postBody,
        default: -1
      }
    }
  },
  'template.rename': {
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
  'template.info': {
    // inspected
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      },
      extended: {
        from: query,
        default: false
      },
      decrypt: {
        from: query,
        default: false
      }
    }
  },
  'templatepool.info': {
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
  'template.lock': {
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
  'template.unlock': {
    // inspected
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vm.allocate': {
    // inspected
    httpMethod: PUT,
    params: {
      template: {
        from: postBody,
        default: ''
      },
      status: {
        from: postBody,
        default: false
      }
    }
  },
  'vm.deploy': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      host: {
        from: postBody,
        default: 0
      },
      enforce: {
        from: postBody,
        default: false
      },
      datastore: {
        from: postBody,
        default: -1
      }
    }
  },
  'vm.action': {
    // inspected
    httpMethod: PUT,
    params: {
      action: {
        from: postBody,
        default: 'stop'
      },
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vm.migrate': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      host: {
        from: postBody,
        default: 0
      },
      livemigration: {
        from: postBody,
        default: false
      },
      enforce: {
        from: postBody,
        default: false
      },
      datastore: {
        from: postBody,
        default: 0
      },
      migration: {
        from: postBody,
        default: 0
      }
    }
  },
  'vm.disksaveas': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      disk: {
        from: postBody,
        default: 0
      },
      name: {
        from: postBody,
        default: ''
      },
      type: {
        from: postBody,
        default: ''
      },
      snapshot: {
        from: postBody,
        default: -1
      }
    }
  },
  'vm.disksnapshotcreate': {
    // inspected
    httpMethod: POST,
    params: {
      id: {
        from: resource,
        default: 0
      },
      disk: {
        from: postBody,
        default: 0
      },
      description: {
        from: postBody,
        default: ''
      }
    }
  },
  'vm.disksnapshotdelete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      disk: {
        from: query,
        default: 0
      },
      snapshot: {
        from: query,
        default: 0
      }
    }
  },
  'vm.disksnapshotrevert': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      disk: {
        from: postBody,
        default: 0
      },
      snapshot: {
        from: postBody,
        default: 0
      }
    }
  },
  'vm.disksnapshotrename': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      disk: {
        from: postBody,
        default: 0
      },
      snapshot: {
        from: postBody,
        default: 0
      },
      name: {
        from: postBody,
        default: ''
      }
    }
  },
  'vm.attach': {
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
  'vm.detach': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      disk: {
        from: postBody,
        default: 0
      }
    }
  },
  'vm.diskresize': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      disk: {
        from: postBody,
        default: 0
      },
      size: {
        from: postBody,
        default: ''
      }
    }
  },
  'vm.attachnic': {
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
  'vm.detachnic': {
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
  'vm.chmod': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userUse: {
        from: postBody,
        default: -1
      },
      userManage: {
        from: postBody,
        default: -1
      },
      userAdmin: {
        from: postBody,
        default: -1
      },
      groupUse: {
        from: postBody,
        default: -1
      },
      groupManage: {
        from: postBody,
        default: -1
      },
      groupAdmin: {
        from: postBody,
        default: -1
      },
      otherUse: {
        from: postBody,
        default: -1
      },
      otherManage: {
        from: postBody,
        default: -1
      },
      otherAdmin: {
        from: postBody,
        default: -1
      }
    }
  },
  'vm.chown': {
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
  'vm.rename': {
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
  'vm.snapshotcreate': {
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
  'vm.snapshotrevert': {
    // inspected
    httpMethod: POST,
    params: {
      id: {
        from: resource,
        default: 0
      },
      snapshot: {
        from: postBody,
        default: 0
      }
    }
  },
  'vm.snapshotdelete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      snapshot: {
        from: postBody,
        default: 0
      }
    }
  },
  'vm.resize': {
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
      enforce: {
        from: postBody,
        default: false
      }
    }
  },
  'vm.update': {
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
  'vm.updateconf': {
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
  'vm.recover': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      operation: {
        from: postBody,
        default: 1
      }
    }
  },
  'vm.info': {
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
  'vm.monitoring': {
    // inspected
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vm.lock': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      level: {
        from: postBody,
        default: 4
      }
    }
  },
  'vm.unlock': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vmpool.info': {
    // inspected
    httpMethod: GET,
    params: {
      filter: {
        from: query,
        default: -2
      },
      start: {
        from: query,
        default: -1
      },
      end: {
        from: query,
        default: -1
      },
      state: {
        from: query,
        default: -2
      },
      filterbykey: {
        from: query,
        default: ''
      }
    }
  },
  'vmpool.infoextended': {
    // inspected
    httpMethod: GET,
    params: {
      filter: {
        from: query,
        default: -2
      },
      start: {
        from: query,
        default: -1
      },
      end: {
        from: query,
        default: -1
      },
      state: {
        from: query,
        default: -2
      },
      filterbykey: {
        from: query,
        default: ''
      }
    }
  },
  'vmpool.monitoring': {
    // inspected
    httpMethod: GET,
    params: {
      filter: {
        from: query,
        default: -2
      }
    }
  },
  'vmpool.accounting': {
    // inspected
    httpMethod: GET,
    params: {
      filter: {
        from: query,
        default: -2
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
  'vmpool.showback': {
    // inspected
    httpMethod: GET,
    params: {
      filter: {
        from: query,
        default: -2
      },
      start_month: {
        filter: query,
        default: -1
      },
      start_year: {
        filter: query,
        default: -1
      },
      end_month: {
        filter: query,
        default: -1
      },
      end_year: {
        filter: query,
        default: -1
      }
    }
  },
  'vmpool.calculateshowback': {
    // inspected
    httpMethod: GET,
    params: {
      start_month: {
        filter: query,
        default: -1
      },
      start_year: {
        filter: query,
        default: -1
      },
      end_month: {
        filter: query,
        default: -1
      },
      end_year: {
        filter: query,
        default: -1
      }
    }
  },
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
        from: postBody,
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
  },
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
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'clusterpool.info': {
    httpMethod: GET,
    params: {}
  },
  'vn.allocate': {
    httpMethod: PUT,
    params: {
      template: {
        from: postBody,
        default: ''
      },
      cluster: {
        from: postBody,
        default: -1
      }
    }
  },
  'vn.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vn.add_ar': {
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
  'vn.rm_ar': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      address: {
        from: postBody,
        default: 0
      }
    }
  },
  'vn.update_ar': {
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
  'vn.reserve': {
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
  'vn.free_ar': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      range: {
        from: postBody,
        default: 0
      }
    }
  },
  'vn.hold': {
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
  'vn.release': {
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
  'vn.update': {
    httpMethod: GET,
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
  'vn.chmod': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userUse: {
        from: postBody,
        default: -1
      },
      userManage: {
        from: postBody,
        default: -1
      },
      userAdmin: {
        from: postBody,
        default: -1
      },
      groupUse: {
        from: postBody,
        default: -1
      },
      groupManage: {
        from: postBody,
        default: -1
      },
      groupAdmin: {
        from: postBody,
        default: -1
      },
      otherUse: {
        from: postBody,
        default: -1
      },
      otherManage: {
        from: postBody,
        default: -1
      },
      otherAdmin: {
        from: postBody,
        default: -1
      }
    }
  },
  'vn.chown': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      user: {
        from: postBody,
        default: 0
      },
      group: {
        from: postBody,
        default: 0
      }
    }
  },
  'vn.rename': {
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
  'vn.info': {
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vn.lock': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      level: {
        from: postBody,
        default: 4
      }
    }
  },
  'vn.unlock': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vnpool.info': {
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
  },
  'secgroup.allocate': {
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
  'secgroup.clone': {
    httpMethod: POST,
    params: {
      id: {
        from: resource,
        default: 0
      },
      name: {
        from: postBody,
        default: ''
      },
      datastore: {
        from: postBody,
        default: -1
      }
    }
  },
  'secgroup.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'secgroup.update': {
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
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userUse: {
        from: postBody,
        default: -1
      },
      userManage: {
        from: postBody,
        default: -1
      },
      userAdmin: {
        from: postBody,
        default: -1
      },
      groupUse: {
        from: postBody,
        default: -1
      },
      groupManage: {
        from: postBody,
        default: -1
      },
      groupAdmin: {
        from: postBody,
        default: -1
      },
      otherUse: {
        from: postBody,
        default: -1
      },
      otherManage: {
        from: postBody,
        default: -1
      },
      otherAdmin: {
        from: postBody,
        default: -1
      }
    }
  },
  'secgroup.chown': {
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
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'secgrouppool.info': {
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
  },
  'vmgroup.allocate': {
    httpMethod: PUT,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'vmgroup.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vmgroup.update': {
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
  'vmgroup.chmod': {
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userUse: {
        from: postBody,
        default: -1
      },
      userManage: {
        from: postBody,
        default: -1
      },
      userAdmin: {
        from: postBody,
        default: -1
      },
      groupUse: {
        from: postBody,
        default: -1
      },
      groupManage: {
        from: postBody,
        default: -1
      },
      groupAdmin: {
        from: postBody,
        default: -1
      },
      otherUse: {
        from: postBody,
        default: -1
      },
      otherManage: {
        from: postBody,
        default: -1
      },
      otherAdmin: {
        from: postBody,
        default: -1
      }
    }
  },
  'vmgroup.chown': {
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
  'vmgroup.rename': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      name: {
        from: postBody,
        defaul: ''
      }
    }
  },
  'vmgroup.info': {
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vmgroup.lock': {
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
  'vmgroup.unlock': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vmgrouppool.info': {
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
  },
  'datastore.allocate': {
    httpMethod: PUT,
    params: {
      template: {
        from: postBody,
        default: ''
      },
      cluster: {
        from: postBody,
        default: -1
      }
    }
  },
  'datastore.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'datastore.update': {
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
  'datastore.chmod': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userUse: {
        from: postBody,
        default: -1
      },
      userManage: {
        from: postBody,
        default: -1
      },
      userAdmin: {
        from: postBody,
        default: -1
      },
      groupUse: {
        from: postBody,
        default: -1
      },
      groupManage: {
        from: postBody,
        default: -1
      },
      groupAdmin: {
        from: postBody,
        default: -1
      },
      otherUse: {
        from: postBody,
        default: -1
      },
      otherManage: {
        from: postBody,
        default: -1
      },
      otherAdmin: {
        from: postBody,
        default: -1
      }
    }
  },
  'datastore.chown': {
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
  'datastore.rename': {
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
  'datastore.enable': {
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
  'datastore.info': {
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'datastorepool.info': {
    httpMethod: GET,
    params: {}
  },
  'image.allocate': {
    httpMethod: PUT,
    params: {
      template: {
        from: postBody,
        default: ''
      },
      datastore: {
        from: postBody,
        default: 0
      }
    }
  },
  'image.clone': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      name: {
        from: postBody,
        default: ''
      },
      datastore: {
        from: postBody,
        default: -1
      }
    }
  },
  'image.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'image.enable': {
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
  'image.persistent': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      persistent: {
        from: postBody,
        default: true
      }
    }
  },
  'image.chtype': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      type: {
        from: postBody,
        default: ''
      }
    }
  },
  'image.update': {
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
  'image.chmod': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userUse: {
        from: postBody,
        default: -1
      },
      userManage: {
        from: postBody,
        default: -1
      },
      userAdmin: {
        from: postBody,
        default: -1
      },
      groupUse: {
        from: postBody,
        default: -1
      },
      groupManage: {
        from: postBody,
        default: -1
      },
      groupAdmin: {
        from: postBody,
        default: -1
      },
      otherUse: {
        from: postBody,
        default: -1
      },
      otherManage: {
        from: postBody,
        default: -1
      },
      otherAdmin: {
        from: postBody,
        default: -1
      }
    }
  },
  'image.chown': {
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
  'image.rename': {
    httpMethod: GET,
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
  'image.snapshotdelete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      snapshot: {
        from: postBody,
        default: 0
      }
    }
  },
  'image.snapshotrevert': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      snapshot: {
        from: postBody,
        default: 0
      }
    }
  },
  'image.snapshotflatten': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      snapshot: {
        from: postBody,
        default: 0
      }
    }
  },
  'image.info': {
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'image.lock': {
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
  'image.unlock': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'imagepool.info': {
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
  },
  'market.allocate': {
    httpMethod: POST,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'market.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'market.update': {
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
  'market.chmod': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userUse: {
        from: postBody,
        default: -1
      },
      userManage: {
        from: postBody,
        default: -1
      },
      userAdmin: {
        from: postBody,
        default: -1
      },
      groupUse: {
        from: postBody,
        default: -1
      },
      groupManage: {
        from: postBody,
        default: -1
      },
      groupAdmin: {
        from: postBody,
        default: -1
      },
      otherUse: {
        from: postBody,
        default: -1
      },
      otherManage: {
        from: postBody,
        default: -1
      },
      otherAdmin: {
        from: postBody,
        default: -1
      }
    }
  },
  'market.chown': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userId: {
        from: postBody,
        default: -1
      },
      groupId: {
        from: postBody,
        default: -1
      }
    }
  },
  'market.rename': {
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
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: -1
      }
    }
  },
  'marketpool.info': {
    httpMethod: GET,
    params: {}
  },
  'marketapp.allocate': {
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
  'marketapp.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'marketapp.enable': {
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
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userUse: {
        from: postBody,
        default: -1
      },
      userManage: {
        from: postBody,
        default: -1
      },
      userAdmin: {
        from: postBody,
        default: -1
      },
      groupUse: {
        from: postBody,
        default: -1
      },
      groupManage: {
        from: postBody,
        default: -1
      },
      groupAdmin: {
        from: postBody,
        default: -1
      },
      otherUse: {
        from: postBody,
        default: -1
      },
      otherManage: {
        from: postBody,
        default: -1
      },
      otherAdmin: {
        from: postBody,
        default: -1
      }
    }
  },
  'marketapp.chown': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userId: {
        from: postBody,
        default: -1
      },
      groupId: {
        from: postBody,
        default: -1
      }
    }
  },
  'marketapp.rename': {
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
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: -1
      }
    }
  },
  'marketapp.lock': {
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
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'marketapppool.info': {
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
  'vrouter.allocate': {
    httpMethod: PUT,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'vrouter.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vrouter.instantiate': {
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
      templateId: {
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
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      attribute: {
        from: postBody,
        default: ''
      }
    }
  },
  'vrouter.detachnic': {
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
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userUse: {
        from: postBody,
        default: -1
      },
      userManage: {
        from: postBody,
        default: -1
      },
      userAdmin: {
        from: postBody,
        default: -1
      },
      groupUse: {
        from: postBody,
        default: -1
      },
      groupManage: {
        from: postBody,
        default: -1
      },
      groupAdmin: {
        from: postBody,
        default: -1
      },
      otherUse: {
        from: postBody,
        default: -1
      },
      otherManage: {
        from: postBody,
        default: -1
      },
      otherAdmin: {
        from: postBody,
        default: -1
      }
    }
  },
  'vrouter.chown': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userId: {
        from: postBody,
        default: -1
      },
      groupId: {
        from: postBody,
        default: -1
      }
    }
  },
  'vrouter.rename': {
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
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: -1
      }
    }
  },
  'vrouter.lock': {
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
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vrouterpool.info': {
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
  'user.allocate': {
    httpMethod: PUT,
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
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'user.passwd': {
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
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      quota: {
        from: postBody,
        default: ''
      }
    }
  },
  'user.chgrp': {
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
  'user.info': {
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: -1
      }
    }
  },
  'userpool.info': {
    httpMethod: GET,
    params: {}
  },
  'userquota.info': {
    httpMethod: GET,
    params: {}
  },
  'userquota.update': {
    httpMethod: PUT,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'group.allocate': {
    httpMethod: POST,
    params: {
      name: {
        from: postBody,
        default: ''
      }
    }
  },
  'group.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'group.info': {
    httpMethod: GET,
    params: {
      id: {
        from: query,
        default: -1
      }
    }
  },
  'group.update': {
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
    httpMethod: GET,
    params: {}
  },
  'groupquota.info': {
    httpMethod: GET,
    params: {}
  },
  'groupquota.update': {
    httpMethod: PUT,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'vdc.allocate': {
    httpMethod: POST,
    params: {
      template: {
        from: postBody,
        default: ''
      },
      cluster: {
        from: postBody,
        default: -1
      }
    }
  },
  'vdc.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vdc.update': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      template: {
        from: postBody,
        default: 0
      },
      replace: {
        from: postBody,
        default: 0
      }
    }
  },
  'vdc.rename': {
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
  'vdc.info': {
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: -1
      }
    }
  },
  'vdcpool.info': {
    httpMethod: GET,
    params: {}
  },
  'vdc.addgroup': {
    httpMethod: POST,
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
  'vdc.delgroup': {
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
  'vdc.addcluster': {
    httpMethod: POST,
    params: {
      id: {
        from: resource,
        default: 0
      },
      zone: {
        from: postBody,
        default: 0
      },
      cluster: {
        from: postBody,
        default: 0
      }
    }
  },
  'vdc.delcluster': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      zone: {
        from: query,
        default: 0
      },
      cluster: {
        from: query,
        default: 0
      }
    }
  },
  'vdc.addhost': {
    httpMethod: POST,
    params: {
      id: {
        from: resource,
        default: 0
      },
      zone: {
        from: postBody,
        default: 0
      },
      host: {
        from: postBody,
        default: 0
      }
    }
  },
  'vdc.delhost': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      zone: {
        from: postBody,
        default: 0
      },
      host: {
        from: postBody,
        default: 0
      }
    }
  },
  'vdc.adddatastore': {
    httpMethod: POST,
    params: {
      id: {
        from: resource,
        default: 0
      },
      zone: {
        from: postBody,
        default: 0
      },
      datastore: {
        from: postBody,
        default: 0
      }
    }
  },
  'vdc.deldatastore': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      zone: {
        from: postBody,
        default: 0
      },
      datastore: {
        from: postBody,
        default: 0
      }
    }
  },
  'vdc.addvnet': {
    httpMethod: POST,
    params: {
      id: {
        from: resource,
        default: 0
      },
      zone: {
        from: postBody,
        default: 0
      },
      datastore: {
        from: postBody,
        default: 0
      }
    }
  },
  'vdc.delvnet': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      zone: {
        from: query,
        default: 0
      },
      datastore: {
        from: query,
        default: 0
      }
    }
  },
  'zone.allocate': {
    httpMethod: POST,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'zone.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'zone.update': {
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
      replace: {
        from: postBody,
        default: 0
      }
    }
  },
  'zone.rename': {
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
  'zone.info': {
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      },
      decrypt: false
    }
  },
  'zone.raftstatus': {
    httpMethod: GET,
    params: {}
  },
  'zonepool.info': {
    httpMethod: GET,
    params: {}
  },
  'acl.addrule': {
    httpMethod: POST,
    params: {
      user: {
        from: postBody,
        default: '0x100000000'
      },
      resource: {
        from: postBody,
        default: '0x1000000000'
      },
      right: {
        from: postBody,
        default: '0x1'
      }
    }
  },
  'acl.delrule': {
    httpMethod: POST,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'acl.info': {
    httpMethod: GET,
    params: {}
  },
  'document.allocate': {
    httpMethod: POST,
    params: {
      template: {
        from: postBody,
        default: ''
      },
      type: {
        from: postBody,
        default: 0
      }
    }
  },
  'document.clone': {
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'document.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'document.update': {
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
  'document.chmod': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userUse: {
        from: postBody,
        default: -1
      },
      userManage: {
        from: postBody,
        default: -1
      },
      userAdmin: {
        from: postBody,
        default: -1
      },
      groupUse: {
        from: postBody,
        default: -1
      },
      groupManage: {
        from: postBody,
        default: -1
      },
      groupAdmin: {
        from: postBody,
        default: -1
      },
      otherUse: {
        from: postBody,
        default: -1
      },
      otherManage: {
        from: postBody,
        default: -1
      },
      otherAdmin: {
        from: postBody,
        default: -1
      }
    }
  },
  'document.chown': {
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
  'document.rename': {
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
  'document.info': {
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'document.lock': {
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
  'document.unlock': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'documentpool.info': {
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      },
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
      },
      type: {
        from: query,
        default: 0
      }
    }
  },
  'system.version': {
    httpMethod: GET,
    params: {}
  },
  'system.config': {
    httpMethod: GET,
    params: {}
  },
  'vntemplate.allocate': {
    httpMethod: PUT,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'vntemplate.clone': {
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
  'vntemplate.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vntemplate.instantiate': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      name: {
        from: postBody,
        default: 0
      },
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'vntemplate.update': {
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
  'vntemplate.chmod': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userUse: {
        from: postBody,
        default: -1
      },
      userManage: {
        from: postBody,
        default: -1
      },
      userAdmin: {
        from: postBody,
        default: -1
      },
      groupUse: {
        from: postBody,
        default: -1
      },
      groupManage: {
        from: postBody,
        default: -1
      },
      groupAdmin: {
        from: postBody,
        default: -1
      },
      otherUse: {
        from: postBody,
        default: -1
      },
      otherManage: {
        from: postBody,
        default: -1
      },
      otherAdmin: {
        from: postBody,
        default: -1
      }
    }
  },
  'vntemplate.chown': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      userId: {
        from: postBody,
        default: -1
      },
      groupId: {
        from: postBody,
        default: -1
      }
    }
  },
  'vntemplate.rename': {
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
  'vntemplate.info': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vntemplate.lock': {
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
  'vntemplate.unlock': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vntemplatepool.info': {
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
  'hook.allocate': {
    httpMethod: POST,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'hook.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'hook.update': {
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
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'hook.lock': {
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
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'hook.retry': {
    httpMethod: PUT,
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
};

module.exports = { from, commandsParams };
