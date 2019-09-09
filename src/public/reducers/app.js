const initial = { user: '', vm: {} };

const App = (state = initial, action) => {
  const { app } = state;
  switch (action.type) {
    case 'SETUSER': {
      const { user } = action.payload;
      return {
        ...app,
        user
      };
    }
    default:
      return state;
  }
};

export default App;
