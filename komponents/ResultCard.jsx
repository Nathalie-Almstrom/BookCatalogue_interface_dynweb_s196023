import React, { useState } from 'react';
import DetailInfo from '../komponents/DetailInfo.jsx';

const ResultCard = (props) => {
  const [divItem, setDivItem] = useState();

  const data = props.data;

  const DetailedInfo = () => {
    setDivItem(<DetailInfo detail={data} />);
  };

  return (
    <>
      <div onClick={DetailedInfo} className="card">
        <h2>{data.title}</h2>
        <ul className="list-item">
          <li>Publish year: {data.first_publish_year}</li>
          <li>Aughter: {data.author_name[0]}</li>
        </ul>
        <p>More details</p>
      </div>
      {divItem}
    </>
  );
};

export default ResultCard;
