const stateDef = {
  pickedCardId: null
}

const playerActions = (state = stateDef, action) => {
  switch (action.type) {
    case 'PLAYERPICK':
      console.log(action.payload);
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