const initial = {
  displayMenu: true,
  zone: 0,
  loading: true
};

const General = (state = initial, action) => {
  switch (action.type) {
    case 'DISPLAY _LOADING': {
      const { loading } = action.payload;
      return {
        ...state,
        loading
      };
    }
    case 'CHANGE_ZONE': {
      const { zone } = action.payload;
      return {
        ...state,
        zone
      };
    }
    case 'DISPLAY_MENU': {
      const { displayMenu } = action.payload;
      return {
        ...state,
        displayMenu
      };
    }
    default:
      return state;
  }
};

export default General;
