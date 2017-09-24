import { actions } from '../actions';

export default (state = { books: [] }, action) => {
  switch (action.type) {
    case actions.BOOKS_LOADED:
      if (!action.books.items || action.books.items.lenght === 0) {
        return state;
      }
      return {
        books: state.books.concat(action.books.items),
      };

      case actions.BOOK_SELECTED:
      return state;

    default:
      return state;
  }
}