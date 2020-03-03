const initial = {
  user: {
    name: ''
  },
  tickets: []
};

const Zendesk = (state = initial, action) => {
  switch (action.type) {
    case 'SETTICKET': {
      const { tickets } = state;
      const newUserState = { ...tickets, ...action.payload };
      return {
        ...state,
        tickets
      };
    }
    default:
      return state;
  }
};

module.exports = Zendesk;
