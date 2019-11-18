const initial = {
  user: {
    name: ''
  },
  tickets: []
};

const Zendesk = (state = initial, action) => {
  switch (action.type) {
    case 'SETTICKET': {
      const { tickets } = state; // extract position and rename
      const newUserState = { ...tickets, ...action.payload }; // merge all data user with new
      return {
        ...state,
        tickets
      };
    }
    default:
      return state;
  }
};

export default Zendesk;
