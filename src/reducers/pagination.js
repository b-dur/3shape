import { actions } from '../actions';

export default (state = { numberOfBooks: 0, loadedBooks: 0 }, action) => {
  switch (action.type) {
    case actions.BOOKS_LOADED:
      if(!action.books.items || action.books.items.lenght === 0) {
        return state;
      }
      
      return {
        numberOfBooks: action.books.totalItems,
        loadedBooks: state.loadedBooks + action.books.items.length,
        totalAmount: action.books.items.reduce(
          (totalAmount, { saleInfo: { listPrice = { amount: 0 } } }) =>
            totalAmount + listPrice.amount, state.totalAmount || 0)
      };

    default:
      return state;
  }
}