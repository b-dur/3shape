import React from 'react';

export default ({ numberOfBooks, loadedBooks, totalAmount, onLoadMoreBooks }) => {
  let loadMoreBooks;
  if (numberOfBooks > loadedBooks) {
    loadMoreBooks = (<a href="javascript:void(0);" onClick={function () { onLoadMoreBooks(loadedBooks) }}> - Load more</a>);
  }
  return (
    <div className="pagination">{loadedBooks} - {numberOfBooks}{loadMoreBooks}<p>Price for all of the books: {Number(totalAmount).toFixed(2)}</p></div>
  );
}