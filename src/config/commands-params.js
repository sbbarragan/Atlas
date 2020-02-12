const { from, httpMethod } = require('./defaults');
const acl = require('./commands/acl-commands');
const cluster = require('./commands/cluster-commands');
const datastore = require('./commands/datastore-commands');
const document = require('./commands/document-commands');
const group = require('./commands/group-commands');
const groupsec = require('./commands/groupsec-commands');
const hook = require('./commands/hook-commands');
const host = require('./commands/host-commands');
const image = require('./commands/image-commands');
const market = require('./commands/market-commands');
const system = require('./commands/system-commans');
const template = require('./commands/template-commands');
const user = require('./commands/user-commands');
const vdc = require('./commands/vdc-commans');
const vm = require('./commands/vm-commands');
const vmgroup = require('./commands/vmgroup-commands');
const vn = require('./commands/vn-commands');
const vntemplate = require('./commands/vntemplate-commands');
const vrouter = require('./commands/vrouter-commands');
const zone = require('./commands/zone-commands');

module.exports = {
  ...acl(from, httpMethod),
  ...cluster(from, httpMethod),
  ...datastore(from, httpMethod),
  ...document(from, httpMethod),
  ...group(from, httpMethod),
  ...groupsec(from, httpMethod),
  ...hook(from, httpMethod),
  ...host(from, httpMethod),
  ...image(from, httpMethod),
  ...market(from, httpMethod),
  ...system(from, httpMethod),
  ...template(from, httpMethod),
  ...user(from, httpMethod),
  ...vdc(from, httpMethod),
  ...vm(from, httpMethod),
  ...vmgroup(from, httpMethod),
  ...vn(from, httpMethod),
  ...vntemplate(from, httpMethod),
  ...vrouter(from, httpMethod),
  ...zone(from, httpMethod)
};
