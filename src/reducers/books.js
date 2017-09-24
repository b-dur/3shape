import { actions } from '../actions';

export default (state = { books: [] }, {type, books}) => {
  switch (type) {
    case actions.BOOKS_LOADED:
      if (!books.items || books.items.lenght === 0) {
        return state;
      }
      return {
        books: state.books.concat(books.items),
      };

    default:
      return state;
  }
}