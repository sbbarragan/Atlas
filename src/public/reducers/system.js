let initial = {
  baseURL: ''
};

// aca se tiene que separar lo que esta en config para dejarlo publico

const GetConfigSystem = config => {
  if (config) {
    const systemData = config();
    console.log('X--> ', systemData);
    if (systemData?.SYSTEM_DATA?.NO_AUTH) {
      console.log('-->', systemData?.SYSTEM_DATA?.NO_AUTH);
      
    }

    initial = { ...initial };
  }
  return (state = initial, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
};

module.exports = GetConfigSystem;
