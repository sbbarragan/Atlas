const initial = {
  user: {
    name: ''
  },
  vm: [],
  templates: [],
  services: [],
  datastores: [],
  virtualRoutes: [],
  vmGroups: [],
  images: [],
  files: [],
  marketPlaces: [],
  apps: [],
  virtualNetworks: [],
  networkTemplates: [],
  securityGroups: [],
  clusters: [],
  hosts: [],
  zones: [],
  groups: [],
  vdc: [],
  acl: []
};

const Opennebula = (state = initial, action) => {
  switch (action.type) {
    case 'SETUSER': {
      const { user: userState } = state; // extract position and rename
      const newUserState = { ...userState, ...action.payload }; // merge all data user with new
      return {
        ...state,
        user: newUserState
      };
    }
    default:
      return state;
  }
};

export default Opennebula;
