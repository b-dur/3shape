import { actions } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case actions.LOAD_TYPE:
      return { books: [] }

    default:
      return state;
  }
}