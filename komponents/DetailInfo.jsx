import React, { useState } from 'react';
import ImageHandler from '../komponents/ImageHandler.jsx';

const DetailInfo = (prop) => {

  const booleanClose = false;
  const CloseInfo = () => {
    prop.func(booleanClose);
  };

  //Variables to determin and make changes to props
  const detail = prop.detail;
  const autorDetail = detail.author_name;
  const publisherDetail = detail.publisher;
  const languageDetail = detail.language;
  const subjectDetail = detail.subject;

  // Map loops to assure all values are being rendered in case there is more then one.  
  const AuthorList = autorDetail.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  const Publisher = publisherDetail.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  const Language = languageDetail.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  const Subject = subjectDetail.map((item, index) => (
    <li className="subject" key={index}>
      {item}
    </li>
  ));

  // As there is more then one key related to images, in case one key does not exist, an other key will be used to get the images. This assures there will allway be atleast one image showing.
  let keyVal = [];
  let valVal = [];

  if ('lccn' in detail) {
    keyVal = "LCCN"
    valVal = detail.lccn;
  } else if ('oclc' in detail) { 
    keyVal = "OCLC"
    valVal = detail.oclc;  
  } else if ('isbn' in detail) {
    keyVal = "ISBN"
    valVal = detail.isbn;  
  }; 

  // This returns the card display for the detailed information
  return (
    <div className="detailed-information-container">
      <div className="top-content">
      <ImageHandler slideValue={valVal} slideKey={keyVal}/>
      </div>
      <div className="center-content">
        <h2>{detail.title}</h2>
        <ul className="list-item-horizontal">Author: {AuthorList}</ul>
        <ul className="list-item-horizontal">Published by {Publisher}</ul>
        <ul className="list-item-horizontal">Published in {Language}</ul>
      </div>
      <div className="bottom-content">
        <ul className="list-item-horizontal">{Subject}</ul>
        <button onClick={CloseInfo}>Close</button>
      </div>
    </div>
  );
};

export default DetailInfo;