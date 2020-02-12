module.exports = ({ resource, postBody }, { GET, POST, DELETE }) => ({
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
  }
});
