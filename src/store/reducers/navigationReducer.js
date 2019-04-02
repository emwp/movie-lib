import { SET_SIDEBAR } from '../actions/types';

const initialState = {
  showSidebar: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SIDEBAR:
      return {
        ...state,
      };
    default:
      return state;
  }
}
