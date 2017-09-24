import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom'

export default (book) => {
  if (book && book.id) {
    return (<div>
      <Link to='/'>back</Link>
      <Book {...book} />
      <div>
        <i>published: {book.volumeInfo.publishedDate} by {book.volumeInfo.publisher},</i>
        <p>{book.volumeInfo.description}</p>
          
      </div>
    </div>);
  }
  return (<div>
    <Link to='/'>back</Link>
  </div>);
};
