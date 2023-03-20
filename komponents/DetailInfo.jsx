import React, { useState } from 'react';
import ImageHandler from '../komponents/ImageHandler.jsx';

const DetailInfo = (prop) => {
  const detail = prop.detail;
  const autorDetail = detail.author_name;
  const publisherDetail = detail.publisher;
  const languageDetail = detail.language;
  const subjectDetail = detail.subject;

  const AuthorList = autorDetail.map((item, index) => <li key={index}>{item}</li> )
  const Publisher = publisherDetail.map((item, index) => <li key={index}>{item}</li> )
  const Language = languageDetail.map((item, index) => <li key={index}>{item}</li> )
  const Subject = subjectDetail.map((item, index) => <li className="subject" key={index}>{item}</li> )

  return (
    <div className="detailed-information-container">
      <ImageHandler />
      <div>
        <h2>{detail.title}</h2>
        <ul className="list-item-horizontal">
          Author: {AuthorList}
        </ul>
        <ul className="list-item-horizontal">Published by {Publisher}</ul>
        <ul className="list-item-horizontal">Published in {Language}</ul>
        <ul className="list-item-horizontal">{Subject}</ul>
      </div>
    </div>
  );
};

export default DetailInfo;

/*
  const AuthorList = () => {
    autorDetail.map((item) => {
      return (
        <li>{item}</li>
      )
    })
  };
*/
