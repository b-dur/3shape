import { connect } from 'react-redux'
import actions from '../actions'
import Books from '../components/Books'

const mapStateToProps = state => state.books;

const mapDispatchToProps = dispatch => ({
  onBookClick: id => dispatch(actions.BOOK_SELECTED(id))
});

const BookShelf = connect(
  mapStateToProps,
  mapDispatchToProps
)(Books)

export default BookShelf

