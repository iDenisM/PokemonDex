const pokemonListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADDING':
      if (state.length === 4) return state;
      const addIndex = state.findIndex(e => e.id === action.payload.id);
      if (addIndex !== -1) {
        state[addIndex] = action.payload;
      } else {
        state = [...state, action.payload];
      }
      return state;
    case 'REMOVING':
      const removeIndex = state.findIndex(e => e.id === action.payload.id);
      if (removeIndex !== -1) {
        state.splice(removeIndex, 1);
      }
      state = [...state];
      return state;      
    default:
      return state;
  }
}

export default pokemonListReducer;