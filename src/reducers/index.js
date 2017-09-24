import { combineReducers } from 'redux'
import books from './books';
import pagination from './pagination';

const bookApp = combineReducers({
  books,
  pagination
})

export default bookApp



