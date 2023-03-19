import React, { useState } from 'react';
import DetailInfo from '../komponents/DetailInfo.jsx'

const ResultCard = () => {
  return (
   <> 
    <div className="card">
        <h2>A wery nong title</h2>
        <ul className="list-item-horizontal">
          <li>Publish year</li>
          <li>Aughter</li>
        </ul>
    </div>
    <DetailInfo/>
    </>
  );
};

export default ResultCard;
