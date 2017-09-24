import actions from '../actions';

export default {
  loadBooks: (dispatch, index = 0) =>
    fetch(`https://www.googleapis.com/books/v1/volumes?q=3shape&startIndex=${index}`)
      .then(x => x.json())
      .then(x => dispatch(actions.BOOKS_LOADED(x)))
};
