import React from 'react';

export default ({ numberOfBooks, loadedBooks, totalAmount, onLoadMoreBooks }) => {
  let loadMoreBooks;
  if (numberOfBooks > loadedBooks) {
    loadMoreBooks = ( <button className="link" onClick={(e) => { e.preventDefault(); onLoadMoreBooks(loadedBooks); }}>Load more</button>);
  }
  return (
    <div className="pagination">{loadedBooks} - {numberOfBooks} {loadMoreBooks}<p>Price for all of the books: {Number(totalAmount).toFixed(2)}</p></div>
  );
}