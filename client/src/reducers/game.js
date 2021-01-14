const gameReducer = (state = false, action) => {
  switch (action.type) {
    case 'STARTGAME':
      state = true;
      return state;
    case 'ENDGAME':
      state = false;
      return state;
    case 'ASKENDGAME':
      state = {gameEnded: true}
      return state;
    default:
      return state;
  }
}

export default gameReducer;