import * as ActionTypes from './types';

const getTitles = () => ({
  type: ActionTypes.GET_TITLES,
});

const setTitles = movies => ({
  type: ActionTypes.SET_TITLES,
  movies,
});

export { getTitles, setTitles };
