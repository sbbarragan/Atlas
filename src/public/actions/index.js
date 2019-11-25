export function setUser(name) {
  return {
    type: 'SETUSER',
    payload: {
      name
    }
  };
}

export function showMenu(displayMenu) {
  return {
    type: 'DISPLAY_MENU',
    payload: {
      displayMenu
    }
  };
}
