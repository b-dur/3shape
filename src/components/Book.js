import React from 'react';
import BookPrice from './BookPrice';

export default ({onClick, volumeInfo: { title, subtitle, authors = [], imageLinks= {} }, saleInfo: { listPrice, retailPrice } }) => (
  <article className="book" onClick={onClick}>
    <img className="book__img" src={imageLinks.smallThumbnail} alt="book" />
    <div className="book__info">
      <h4> {title} </h4>
      <h6> {subtitle} </h6>
      {authors.map((author, index) => <p key={index}>{author}</p>)}
      <BookPrice listPrice={listPrice} retailPrice={retailPrice} />
    </div>
  </article>
);
