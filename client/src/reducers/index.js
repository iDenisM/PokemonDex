import { combineReducers } from 'redux';
import searcherReducer from './search';
import selectorReducer from './select';
import pokemonListReducer from './pokemonList';

const rootReducers = combineReducers({
  textSearch: searcherReducer,
  select: selectorReducer,
  pokemonList: pokemonListReducer
})

export default rootReducers;