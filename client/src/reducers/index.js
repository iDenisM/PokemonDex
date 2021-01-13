import { combineReducers } from 'redux';
import searcherReducer from './search';
import selectorReducer from './select';
import pokemonListReducer from './pokemonList';
import gameReducer from './game';
import botPokemonListReduce from './botPokemonList';

const rootReducers = combineReducers({
  textSearch: searcherReducer,
  select: selectorReducer,
  pokemonList: pokemonListReducer,
  botPokemonList: botPokemonListReduce,
  gameState: gameReducer
})

export default rootReducers;