const searcherReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCHING':
      return action.payload
    default:
      return state;
  }
}

export default searcherReducer;