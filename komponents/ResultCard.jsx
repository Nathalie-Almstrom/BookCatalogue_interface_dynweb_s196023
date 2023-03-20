import React, { useState } from 'react';
import DetailInfo from '../komponents/DetailInfo.jsx';

const ResultCard = (props) => {
  const [divItem, setDivItem] = useState();
  const [closeDetail, setCloseDetail] = useState(false);

  const data = props.data;

  const pull_data = (dataFromChild) => {
    setCloseDetail(dataFromChild);
  };

  console.log(closeDetail)

  // When a resultCard is clicked in a detailInfo is opened
  const DetailedInfo = () => {
    setCloseDetail(true);
    setDivItem(<DetailInfo detail={data} func={pull_data} />);
  };

  return (
    <>
      <div onClick={DetailedInfo} className="card">
        <h2>{data.title}</h2>
        <ul className="list-item">
          <li>Publish year: {data.first_publish_year}</li>
          <li>Aughter: {data.author_name[0]}</li>
        </ul>
      </div>
      {closeDetail ? divItem : null}
    </>
  );
};

export default ResultCard;
