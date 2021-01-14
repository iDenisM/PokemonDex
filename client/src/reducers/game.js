const gameReducer = (state = false, action) => {
  switch (action.type) {
    case 'STARTGAME':
      state = true;
      return state;
    case 'ENDGAME':
      state = false;
      return state;
    case 'ASKENDGAME':
      return true;
    default:
      return state;
  }
}

export default gameReducer;