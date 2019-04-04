import { GET_TITLES, SET_TITLES } from '../actions/types';

const initialState = {
  titles: [],
  baseURL: 'https://image.tmdb.org/t/p/w200',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TITLES:
      return {
        ...state,
      };
    case SET_TITLES:
      return {
        ...state,
        titles: action.movies,
      };
    default:
      return state;
  }
}
