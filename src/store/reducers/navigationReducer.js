import { TOGGLE_SIDEBAR } from '../actions/types';

const initialState = {
  showSidebar: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: true,
      };
    default:
      return state;
  }
}
