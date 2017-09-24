import { connect } from 'react-redux'
import actions from '../actions'
import Pagination from '../components/Pagination';
import { BookApi } from '../services';

let _state;
const mapStateToProps = state => {
  _state = state;
  return state.pagination;
}

const mapDispatchToProps = dispatch => (
  {
    onLoadMoreBooks: index => BookApi.loadBooks(dispatch, index)
  }
);

const BookPagination = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)

export default BookPagination
