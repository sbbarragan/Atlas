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
  },
  'vn.allocate': {
    // inspected
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
  'vn.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vn.add_ar': {
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
  'vn.rm_ar': {
    // inspected
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
  'vn.reserve': {
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
  'vn.free_ar': {
    // inspected
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
  'vn.release': {
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
  'vn.update': {
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
  'vn.chmod': {
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
  'vn.chown': {
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
  'vn.rename': {
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
  'vn.info': {
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
  'vn.lock': {
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
  'vn.unlock': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vnpool.info': {
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
  },
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
  },
  'vmgroup.allocate': {
    // inspected
    httpMethod: POST,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'vmgroup.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vmgroup.update': {
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
  'vmgroup.chmod': {
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
  'vmgroup.chown': {
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
  'vmgroup.rename': {
    // inspected
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
  'vmgroup.lock': {
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
  'vmgroup.unlock': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vmgrouppool.info': {
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
  'datastore.allocate': {
    // inspected
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
  'datastore.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'datastore.update': {
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
  'datastore.chmod': {
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
  'datastore.chown': {
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
  'datastore.rename': {
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
  'datastore.enable': {
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
  'datastore.info': {
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
  'datastorepool.info': {
    // inspected
    httpMethod: GET,
    params: {}
  },
  'image.allocate': {
    // inspected
    httpMethod: POST,
    params: {
      template: {
        from: postBody,
        default: ''
      },
      datastore: {
        from: postBody,
        default: 0
      },
      capacity: {
        from: postBody,
        default: false
      }
    }
  },
  'image.clone': {
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
      },
      datastore: {
        from: postBody,
        default: -1
      }
    }
  },
  'image.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'image.enable': {
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
  'image.persistent': {
    // inspected
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
    // inspected
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
  'image.chmod': {
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
  'image.chown': {
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
  'image.rename': {
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
  'image.snapshotdelete': {
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
  'image.snapshotrevert': {
    // inspected
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
    // inspected
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
  'image.lock': {
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
  'image.unlock': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'imagepool.info': {
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
  },
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
  },
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
  },
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
  },
  'vdc.allocate': {
    // inspected
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
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vdc.update': {
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
  'vdc.rename': {
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
  'vdc.info': {
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
  'vdcpool.info': {
    // inspected
    httpMethod: GET,
    params: {}
  },
  'vdc.addgroup': {
    // inspected
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
  'vdc.addcluster': {
    // inspected
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
    // inspected
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
    // inspected
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
    // inspected
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
    // inspected
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
    // inspected
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
    // inspected
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
      vnet: {
        from: postBody,
        default: 0
      }
    }
  },
  'vdc.delvnet': {
    // inspected
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
      vnet: {
        from: query,
        default: 0
      }
    }
  },
  'zone.allocate': {
    // inspected
    httpMethod: POST,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'zone.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'zone.update': {
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
  'zone.rename': {
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
  'zone.info': {
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
  'zone.raftstatus': {
    // inspected
    httpMethod: GET,
    params: {}
  },
  'zonepool.info': {
    // inspected
    httpMethod: GET,
    params: {}
  },
  'acl.addrule': {
    // inspected
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
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'acl.info': {
    // inspected
    httpMethod: GET,
    params: {}
  },
  'document.allocate': {
    // inspected
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
  'document.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'document.update': {
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
  'document.chmod': {
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
  'document.chown': {
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
  'document.rename': {
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
  'document.info': {
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
  'document.lock': {
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
  'document.unlock': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'documentpool.info': {
    // inspected
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
    // inspected
    httpMethod: GET,
    params: {}
  },
  'system.config': {
    // inspected
    httpMethod: GET,
    params: {}
  },
  'vntemplate.allocate': {
    // inspected
    httpMethod: POST,
    params: {
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'vntemplate.clone': {
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
  'vntemplate.delete': {
    // inspected
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vntemplate.instantiate': {
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
      template: {
        from: postBody,
        default: ''
      }
    }
  },
  'vntemplate.update': {
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
  'vntemplate.chmod': {
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
  'vntemplate.chown': {
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
  'vntemplate.rename': {
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
  'vntemplate.info': {
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
  'vntemplate.lock': {
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
  'vntemplate.unlock': {
    // inspected
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vntemplatepool.info': {
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
};

module.exports = { from, commandsParams };
