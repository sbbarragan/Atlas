let initial = {
  baseURL: ''
};

// aca se tiene que separar lo que esta en config para dejarlo publico

const GetConfigSystem = config => {
  if (config) {
    initial = { ...initial, ...config() };
  }
  return (state = initial, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
};

export default GetConfigSystem;
