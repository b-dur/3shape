import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../actions'
import BookDetail from '../components/BookDetail'

const mapStateToProps = (state, {match}) => {
  return state.books.books.find(book => book.id === match.params.id) || {};
};

const mapDispatchToProps = dispatch => ({
  onBookClick: id => dispatch(actions.BOOK_SELECTED(id))
});

const Book = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail)


export default withRouter(connect(mapStateToProps)(Book))