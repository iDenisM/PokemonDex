import { combineReducers } from 'redux';
import searcherReducer from './search';
import selectorReducer from './select';
import addingPokemonReducer from './addPokemon';

const rootReducers = combineReducers({
  textSearch: searcherReducer,
  select: selectorReducer,
  addPokemon: addingPokemonReducer
})

export default rootReducers;