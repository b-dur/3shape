import React from 'react';
import Book from './Book';

const Books = ({ books = [] }) => (
  <div className="list_books">
    {books.map(
      book => (
        <Book key={book.id} {...book} />
      ))}
  </div>);

export default Books;