import React, { useState } from 'react';
import ImageHandler from '../komponents/ImageHandler.jsx';

const DetailInfo = (prop) => {

  const booleanClose = false;
  const CloseInfo = () => {
    prop.func(booleanClose);
  };

  const detail = prop.detail;
  const autorDetail = detail.author_name;
  const publisherDetail = detail.publisher;
  const languageDetail = detail.language;
  const subjectDetail = detail.subject;

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

  //start test
  let keyVal = [];
  let valVal = [];

  if ('lccn' in detail) {
    keyVal = "LCCN"
    valVal = detail.lccn;
    console.log('This img is from LCCN')
  } else if ('oclc' in detail) { 
    keyVal = "OCLC"
    valVal = detail.oclc;  
    console.log('This img is from OCLC')
  } else if ('isbn' in detail) {
    keyVal = "ISBN"
    valVal = detail.isbn;  
    console.log('This img is from ISBN')
  }; 

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

/*

// tracing image refferences in multiple keys 
//test med switch

const [keyVal, setKeyVal] = useState();
const [valVal, setValVal] = useState();

switch (detail) {
  case 'lccn' : {
    setKeyVal(lccn);
    setValVal(detail.lccn);
    break
  }
  case 'oclc' : {
    setKeyVal(oclc);
    setValVal(detail.oclc);
    break
  }
  case 'isbn': {
    setKeyVal(isbn);
    setValVal(detail.isbn);
    break
  }
  default: { 
    setValVal('Either this did not work or theres no photos')
    break
  }
}
console.log(valVal)


*/


/* Test med .find
function isSubject (obj) {
  if ("oclc" in detail) {
    obj.detail.oclc
  } else {
    console.log("this did not work.")
  }
}

console.log(detail.find(isSubject))

*/