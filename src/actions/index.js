export const actions = {
  'LOAD_BOOKS': Symbol('LOAD_BOOKS'),
};

export default {
  loadBooks: (books) => ({
    type: actions.LOAD_BOOKS,
    books
  })
};

