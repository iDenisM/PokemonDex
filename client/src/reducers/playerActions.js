const stateDef = {
  pickedCardId: null,
  playerTurn: true
}

const playerActions = (state = stateDef, action) => {
  switch (action.type) {
    case 'PLAYERPICK':
      state = { ...state, pickedCardId: action.payload }
      return state;
    case 'PLAYERTURN':
      state = { ...state, playerTurn: action.payload }
      return state;
    default:
      return state;
  }
}

export default playerActions;