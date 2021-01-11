const gameReducer = (state = false, action) => {
  switch (action.type) {
    case 'STARTENDGAME':
      state = !state;
      return state;
    default:
      return state;
  }
}

export default gameReducer;