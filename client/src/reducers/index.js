import { combineReducers } from 'redux';
import searcherReducer from './search';
import selectorReducer from './select';
import pokemonListReducer from './pokemonList';
import gameReducer from './game'

const rootReducers = combineReducers({
  textSearch: searcherReducer,
  select: selectorReducer,
  pokemonList: pokemonListReducer,
  gameState: gameReducer
})

export default rootReducers;