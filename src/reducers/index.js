import { actions } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case actions.LOAD_BOOKS:
      console.log(action);
      return {
        ...state,
        books: action.books.items,
        totalBooks: action.totalItems
      };

    default:
      return state;
  }
}