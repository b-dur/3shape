export const actions = {
  'BOOKS_LOADED': Symbol('BOOKS_LOADED'),
  'BOOK_SELECTED': Symbol('BOOK_SELECTED'),
};

export default {
  BOOKS_LOADED: (books) => ({
    type: actions.BOOKS_LOADED,
    books
  }),

  BOOK_SELECTED: (id) => ({
    type: actions.BOOK_SELECTED,
    id
  })
};

