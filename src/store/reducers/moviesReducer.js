import { GET_TITLES } from '../actions/types';

const initialState = {
  titles: [
    {
      id: 1,
      name: 'Mad Max: Fury Road',
      year: '2015',
      genre: 'Action',
    },
    {
      id: 2,
      name: 'Star Wars: The Force Awakens',
      year: '2015',
      genre: 'Sci-Fi',
    },
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TITLES:
      return {
        ...state,
      };
    default:
      return state;
  }
}
