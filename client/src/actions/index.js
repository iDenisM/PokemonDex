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

export const removePokemonFromList = (value) => ({
  type: 'REMOVING',
  payload: value
})

export const restPokemonList = () => ({
  type: 'RESETECARDS'
})

export const doStartGame = () => ({
  type: 'STARTGAME'
})

export const doEndGame = () => ({
  type: 'ENDGAME'
})

export const addBots = (value) => ({
  type: 'ADDINGBOTS',
  payload: value
})

export const removeBots = () => ({
  type: 'REMOVEINGBOTS'
})

export const playerPickedCard = (value) => ({
  type: 'PLAYERPICK',
  payload: value
})

export const playerTrun = (value) => ({
  type: 'PLAYERTURN',
  payload: value
})

export const askedToEndGame = (value) => ({
  type: 'ASKENDGAME',
  payload: value
})