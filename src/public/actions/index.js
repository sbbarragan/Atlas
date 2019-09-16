export function setUser(name) {
  return {
    type: 'SETUSER',
    payload: {
      name
    }
  };
}
