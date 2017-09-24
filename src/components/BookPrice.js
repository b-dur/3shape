import React from 'react';

export default ({listPrice, retailPrice}) => {
  if (!listPrice) {
    return null;
  }

  return (
    <span>
      <del>{Number(listPrice.amount).toFixed(2)}</del> {Number(retailPrice.amount).toFixed(2)}
    </span>
  );
};