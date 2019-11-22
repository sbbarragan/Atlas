const initial = {
  menu: true
};

const General = (state = initial, action) => {
  switch (action.type) {
    case 'SET_MENU': {
      const { menu } = state; // extract position and rename
      const newGeneralState = { ...menu, ...action.payload }; // merge all data user with new
      return {
        ...state,
        user: newGeneralState
      };
    }
    default:
      return state;
  }
};

export default General;
