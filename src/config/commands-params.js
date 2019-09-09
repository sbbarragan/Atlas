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
  'template.clone': {
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
      extraTemplate: {
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
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      },
      extended: {
        from: query,
        default: false
      }
    }
  },
  'template.lock': {
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
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'templatepool.info': {
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
  'vm.allocate': {
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
      status: {
        from: postBody,
        default: false
      }
    }
  },
  'vm.deploy': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      hostId: {
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
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      action: {
        from: postBody,
        default: 'stop'
      },
      objetId: {
        from: postBody,
        default: 0
      }
    }
  },
  'vm.migrate': {
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
      }
    }
  },
  'vm.disksaveas': {
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
      image: {
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
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      },
      object: {
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
  'vm.attach': {
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      disk: {
        from: postBody,
        default: ''
      }
    }
  },
  'vm.detach': {
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
    httpMethod: PUT,
    params: {
      id: {
        from: resource,
        default: 0
      },
      nic: {
        from: postBody,
        default: ''
      }
    }
  },
  'vm.detachnic': {
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
  'vm.rename': {
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
  'vm.snapshotrevert': {
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
  'vm.snapshotdelete': {
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
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vm.monitoring': {
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'vmpool.info': {
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
      },
      vmState: {
        from: query,
        default: -1
      }
    }
  },
  'vmpool.monitoring': {
    httpMethod: GET,
    params: {
      filter: {
        from: query,
        default: -2
      }
    }
  },
  'vmpool.accounting': {
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
    httpMethod: GET,
    params: {
      filter: {
        from: query,
        default: -2
      },
      startMonth: {
        filter: query,
        default: -1
      },
      startYear: {
        filter: query,
        default: -1
      },
      endMonth: {
        filter: query,
        default: -1
      },
      endYear: {
        filter: query,
        default: -1
      }
    }
  },
  'vmpool.calculateshowback': {
    httpMethod: GET,
    params: {
      startMonth: {
        filter: query,
        default: -1
      },
      startYear: {
        filter: query,
        default: -1
      },
      endMonth: {
        filter: query,
        default: -1
      },
      endYear: {
        filter: query,
        default: -1
      }
    }
  },
  'host.allocate': {
    httpMethod: PUT,
    params: {
      host: {
        from: postBody,
        default: ''
      },
      information: {
        from: postBody,
        default: ''
      },
      machine: {
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
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'host.status': {
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
  'host.rename': {
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
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'host.monitoring': {
    httpMethod: GET,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'hostpool.info': {
    httpMethod: GET,
    params: {}
  },
  'hostpool.monitoring': {
    httpMethod: GET,
    params: {}
  },
  'cluster.allocate': {
    httpMethod: PUT,
    params: {
      name: {
        from: postBody,
        default: ''
      }
    }
  },
  'cluster.delete': {
    httpMethod: DELETE,
    params: {
      id: {
        from: resource,
        default: 0
      }
    }
  },
  'cluster.update': {
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
    httpMethod: PUT,
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
    httpMethod: DELETE,
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
    params: {}
  },
  'market.allocate': {
    httpMethod: GET,
    params: {}
  },
  'market.delete': {
    httpMethod: GET,
    params: {}
  },
  'market.update': {
    httpMethod: GET,
    params: {}
  },
  'market.chmod': {
    httpMethod: GET,
    params: {}
  },
  'market.chown': {
    httpMethod: GET,
    params: {}
  },
  'market.rename': {
    httpMethod: GET,
    params: {}
  },
  'market.info': {
    httpMethod: GET,
    params: {}
  },
  'marketpool.info': {
    httpMethod: GET,
    params: {}
  },
  'marketapp.allocate': {
    httpMethod: GET,
    params: {}
  },
  'marketapp.delete': {
    httpMethod: GET,
    params: {}
  },
  'marketapp.enable': {
    httpMethod: GET,
    params: {}
  },
  'marketapp.update': {
    httpMethod: GET,
    params: {}
  },
  'marketapp.chmod': {
    httpMethod: GET,
    params: {}
  },
  'marketapp.chown': {
    httpMethod: GET,
    params: {}
  },
  'marketapp.rename': {
    httpMethod: GET,
    params: {}
  },
  'marketapp.info': {
    httpMethod: GET,
    params: {}
  },
  'marketapppool.info': {
    httpMethod: GET,
    params: {}
  },
  'vrouter.allocate': {
    httpMethod: GET,
    params: {}
  },
  'vrouter.delete': {
    httpMethod: GET,
    params: {}
  },
  'vrouter.instantiate': {
    httpMethod: GET,
    params: {}
  },
  'vrouter.attachnic': {
    httpMethod: GET,
    params: {}
  },
  'vrouter.detachnic': {
    httpMethod: GET,
    params: {}
  },
  'vrouter.update': {
    httpMethod: GET,
    params: {}
  },
  'vrouter.chmod': {
    httpMethod: GET,
    params: {}
  },
  'vrouter.chown': {
    httpMethod: GET,
    params: {}
  },
  'vrouter.rename': {
    httpMethod: GET,
    params: {}
  },
  'vrouter.info': {
    httpMethod: GET,
    params: {}
  },
  'vrouterpool.info': {
    httpMethod: GET,
    params: {}
  },
  'user.allocate': {
    httpMethod: GET,
    params: {}
  },
  'user.delete': {
    httpMethod: GET,
    params: {}
  },
  'user.passwd': {
    httpMethod: GET,
    params: {}
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
        default: -1
      },
      gid: {
        from: postBody,
        default: -1
      }
    }
  },
  'user.update': {
    httpMethod: GET,
    params: {}
  },
  'user.chauth': {
    httpMethod: GET,
    params: {}
  },
  'user.quota': {
    httpMethod: GET,
    params: {}
  },
  'user.chgrp': {
    httpMethod: GET,
    params: {}
  },
  'user.addgroup': {
    httpMethod: GET,
    params: {}
  },
  'user.delgroup': {
    httpMethod: GET,
    params: {}
  },
  'user.info': {
    httpMethod: GET,
    params: {
      object: {
        from: query,
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
    httpMethod: GET,
    params: {}
  },
  'group.allocate': {
    httpMethod: GET,
    params: {}
  },
  'group.delete': {
    httpMethod: GET,
    params: {}
  },
  'group.info': {
    httpMethod: GET,
    params: {}
  },
  'group.update': {
    httpMethod: GET,
    params: {}
  },
  'group.addadmin': {
    httpMethod: GET,
    params: {}
  },
  'group.deladmin': {
    httpMethod: GET,
    params: {}
  },
  'group.quota': {
    httpMethod: GET,
    params: {}
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
    httpMethod: GET,
    params: {}
  },
  'vdc.allocate': {
    httpMethod: GET,
    params: {}
  },
  'vdc.delete': {
    httpMethod: GET,
    params: {}
  },
  'vdc.update': {
    httpMethod: GET,
    params: {}
  },
  'vdc.rename': {
    httpMethod: GET,
    params: {}
  },
  'vdc.info': {
    httpMethod: GET,
    params: {}
  },
  'vdcpool.info': {
    httpMethod: GET,
    params: {}
  },
  'vdc.addgroup': {
    httpMethod: GET,
    params: {}
  },
  'vdc.delgroup': {
    httpMethod: GET,
    params: {}
  },
  'vdc.addcluster': {
    httpMethod: GET,
    params: {}
  },
  'vdc.delcluster': {
    httpMethod: GET,
    params: {}
  },
  'vdc.addhost': {
    httpMethod: GET,
    params: {}
  },
  'vdc.delhost': {
    httpMethod: GET,
    params: {}
  },
  'vdc.adddatastore': {
    httpMethod: GET,
    params: {}
  },
  'vdc.deldatastore': {
    httpMethod: GET,
    params: {}
  },
  'vdc.addvnet': {
    httpMethod: GET,
    params: {}
  },
  'vdc.delvnet': {
    httpMethod: GET,
    params: {}
  },
  'zone.allocate': {
    httpMethod: GET,
    params: {}
  },
  'zone.delete': {
    httpMethod: GET,
    params: {}
  },
  'zone.update': {
    httpMethod: GET,
    params: {}
  },
  'zone.rename': {
    httpMethod: GET,
    params: {}
  },
  'zone.info': {
    httpMethod: GET,
    params: {}
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
    httpMethod: GET,
    params: {}
  },
  'acl.delrule': {
    httpMethod: GET,
    params: {}
  },
  'acl.info': {
    httpMethod: GET,
    params: {}
  },
  'document.allocate': {
    httpMethod: GET,
    params: {}
  },
  'document.clone': {
    httpMethod: GET,
    params: {}
  },
  'document.delete': {
    httpMethod: GET,
    params: {}
  },
  'document.update': {
    httpMethod: GET,
    params: {}
  },
  'document.chmod': {
    httpMethod: GET,
    params: {}
  },
  'document.chown': {
    httpMethod: GET,
    params: {}
  },
  'document.rename': {
    httpMethod: GET,
    params: {}
  },
  'document.info': {
    httpMethod: GET,
    params: {}
  },
  'documentpool.info': {
    httpMethod: GET,
    params: {}
  },
  'system.version': {
    httpMethod: GET,
    params: {}
  },
  'system.config': {
    httpMethod: GET,
    params: {}
  }
};

module.exports = { from, commandsParams };
