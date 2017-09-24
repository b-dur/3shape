export const actions = {
  'BOOKS_LOADED': Symbol('BOOKS_LOADED'),
};

export default {
  BOOKS_LOADED: (books) => ({
    type: actions.BOOKS_LOADED,
    books
  })
};

