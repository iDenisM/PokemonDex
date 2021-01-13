const botPokemonListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADDINGBOTS':
      state = [...state, ...action.payload];
      return state;
    case 'REMOVEINGBOTS':
      state = [];
      return state;
    default:
      return state;
  }
}

export default botPokemonListReducer;