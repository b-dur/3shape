import React from 'react';
import Book from './Book';

const Books = ({ books = [], onBookClick }) => (
  <div className="list_books">
    {books.map(
      book => (
        <Book key={book.id} {...book} onClick={() => onBookClick(book.id)} />
      ))}
  </div>);

export default Books;