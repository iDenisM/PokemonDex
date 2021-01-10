import { combineReducers } from 'redux';
import searcherReducer from './search';
import selectorReducer from './select';

const rootReducers = combineReducers({
  textSearch: searcherReducer,
  select: selectorReducer
})

export default rootReducers;