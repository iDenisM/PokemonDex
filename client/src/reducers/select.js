const selectorReducer = (state = '', action) => {
  switch (action.type) {
    case 'SELECTING':
      return action.payload
    default:
      return state;
  }
}

export default selectorReducer;