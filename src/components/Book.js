import React from 'react';
import BookPrice from './BookPrice';

export default ({ volumeInfo: { title, subtitle, authors = [], imageLinks }, saleInfo: { listPrice, retailPrice } }) => (
  <div>
    <h2> {title} </h2>
    <h3> {subtitle} </h3>
    {authors.map((author, index) => <p key={index}>{author}</p>)}
    <img src={imageLinks.smallThumbnail}/>
    <BookPrice listPrice={listPrice} retailPrice={retailPrice} />
  </div>
);
