import React, { useState } from 'react';
import ResultCard from '../komponents/ResultCard.jsx';

const ResultTable = (props) => {
  // giving props new variable names from this component. 
  // .slice limitates the search results to 30. 
  const items = props.books.slice(0, 30);
  const itemsCount = props.num;

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
