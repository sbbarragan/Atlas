const initial = {
  displayMenu: true,
  zone: 0
};

const General = (state = initial, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE': {
      const { language } = action.payload;
      return {
        ...state,
        language
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
