import { actions } from '../actions';

export default (state = { numberOfBooks: 0, loadedBooks: 0 }, {type, books}) => {
  switch (type) {
    case actions.BOOKS_LOADED:
      if(!books.items || books.items.lenght === 0) {
        return state;
      }
      
      return {
        numberOfBooks: books.totalItems,
        loadedBooks: state.loadedBooks + books.items.length,
        totalAmount: books.items.reduce(
          (totalAmount, { saleInfo: { listPrice = { amount: 0 } } }) =>
            totalAmount + listPrice.amount, state.totalAmount || 0)
      };

    default:
      return state;
  }
}