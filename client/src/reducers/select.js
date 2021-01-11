const selectorReducer = (state = '', action) => {
  switch (action.type) {
    case 'SELECTING':
      state = action.payload;
      return state;
    default:
      return state;
  }
}

export default selectorReducer;