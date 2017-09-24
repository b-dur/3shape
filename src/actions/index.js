export const actions = {
  'LOAD_BOOKS': Symbol('LOAD_BOOKS'),
};

export const loadBooks = () => ({
  type: actions.LOAD_BOOKS
});

