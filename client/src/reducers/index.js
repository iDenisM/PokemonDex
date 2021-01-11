import { combineReducers } from 'redux';
import searcherReducer from './search';
import selectorReducer from './select';
import pokemonListReducer from './pokemonList';
import startEndGameReducer from './game'

const rootReducers = combineReducers({
  textSearch: searcherReducer,
  select: selectorReducer,
  pokemonList: pokemonListReducer,
  startEndGame: startEndGameReducer
})

export default rootReducers;