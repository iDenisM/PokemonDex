const addingPokemonReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADDING':
      return action.payload
    default:
      return state;
  }
}

export default addingPokemonReducer;