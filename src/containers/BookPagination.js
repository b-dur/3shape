import { connect } from 'react-redux'
import Pagination from '../components/Pagination';
import { BookApi } from '../services';

const mapStateToProps = state => state.pagination;

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
