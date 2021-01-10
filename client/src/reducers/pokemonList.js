const pokemonListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADDING':
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
}

export default pokemonListReducer;