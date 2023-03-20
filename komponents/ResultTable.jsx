import React, { useState } from 'react';
import ResultCard from '../komponents/ResultCard.jsx';

const ResultTable = (props) => {
  const items = props.books.slice(0, 30);
  const itemsCount = props.num;

  console.log(items);

  return (
    <>
      <p>Search results {itemsCount}</p>
      <div className="card-container">
        {items.map((item, index) => {
          return <ResultCard key={index} data={item} />;
        })}
      </div>
    </>
  );
};

export default ResultTable;
