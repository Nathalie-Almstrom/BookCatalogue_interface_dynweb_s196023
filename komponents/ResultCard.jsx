import React, { useState } from 'react';
import DetailInfo from '../komponents/DetailInfo.jsx';

const ResultCard = (props) => {
  const [divItem, setDivItem] = useState();
  const [closeDetail, setCloseDetail] = useState(false);

  //just putting props in an aray specificly for the component
  const data = props.data;

  const pull_data = (dataFromChild) => {
    setCloseDetail(dataFromChild);
  };

  // When a resultCard is clicked on a detailInfo is opened
  // and the ResultCard closes.
  // this function gets the value from other component and determmines boolean lalue.
  // The conditional rendering is then executed under "return"
  const DetailedInfo = () => {
    setCloseDetail(true);
    setDivItem(<DetailInfo detail={data} func={pull_data} />);
  };

  return (
    <>
      {closeDetail ? null : (
        <div onClick={DetailedInfo} className="card">
          <h2>{data.title}</h2>
          <ul className="list-item">
            <li>Publish year: {data.first_publish_year}</li>
            <li>Aughter: {data.author_name[0]}</li>
          </ul>
        </div>
      )}
      {closeDetail ? divItem : null}
    </>
  );
};

export default ResultCard;
