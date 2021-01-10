export const searchKeyDown = (value) => ({
  type: 'SEARCHING',
  payload: value
})

export const selectPokemonClick = (value) => ({
  type: 'SELECTING',
  payload: value
})

export const addPokemonToList = (value) => ({
  type: 'ADDING',
  payload: value
})

// export const removePokemonFromList = (value) => ({
//   type: 'REMOVING',
//   payload: value
// })