import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
  movies: moviesReducer,
  navigation: navigationReducer,
});
