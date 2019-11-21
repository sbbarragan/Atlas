const fs = require('fs');
const YAML = require('yaml');
const { defaultConfigFile } = require('../config/defaults');

const getConfig = () => {
  let rtn = {};
  if (
    defaultConfigFile &&
    fs &&
    fs.readFileSync &&
    fs.existsSync &&
    fs.existsSync(defaultConfigFile)
  ) {
    const file = fs.readFileSync(defaultConfigFile, 'utf8');
    rtn = YAML.parse(file);
  }
  return rtn;
};

module.exports = {
  getConfig
};
