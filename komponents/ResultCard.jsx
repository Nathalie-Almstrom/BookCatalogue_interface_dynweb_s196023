import React, { useState } from 'react';
import DetailInfo from '../komponents/DetailInfo.jsx';

const ResultCard = (props) => {
  const [divItem, setDivItem] = useState();
  const [closeDetail, setCloseDetail] = useState(false)

  const data = props.data;

  // When a resultCard is clicked in a detailInfo is opened
  const DetailedInfo = () => {
    setDivItem(<DetailInfo detail={data} />);
    setCloseDetail(true);
  };

  console.log(closeDetail)
  return (
    <>
      <div onClick={DetailedInfo} className="card">
        <h2>{data.title}</h2>
        <ul className="list-item">
          <li>Publish year: {data.first_publish_year}</li>
          <li>Aughter: {data.author_name[0]}</li>
        </ul>
      </div>
      {divItem}
    </>
  );
};

export default ResultCard;
