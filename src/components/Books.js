import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom'

const Books = ({ books = [], onBookClick }) => (
  <div className="list_books">
    {books.map(
      book => (
        <Link key={book.id} to={'/book/' + book.id}>
          <Book {...book} />
        </Link>
      ))}
  </div>);

export default Books;