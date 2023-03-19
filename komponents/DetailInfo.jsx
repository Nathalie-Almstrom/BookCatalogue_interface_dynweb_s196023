import React, { useState } from 'react';
import ImageHandler from '../komponents/ImageHandler.jsx'

const DetailInfo = () => {

  const AuthorList = () => {
    return (
      <li>{'Author'}</li>
    )
  };
  const Publisher = () => {
    return (
      <li>{'Publisher'}</li>
    )
  }; 
  const Language = () => {
    return (
      <li>{'Language'}</li>
    )
  }; 
  const Subject = () => {
    return (
      <li>{'Subject'}</li>
    )
  }; 

  return (
  <div className="detailed-information-container">
    <ImageHandler/>
    <div>
      <h2>Title</h2>
      <ul className='list-item-horizontal'>
        {<AuthorList/>}
      </ul>
      <ul className='list-item-horizontal'>
        {<Publisher/>}
      </ul>
      <ul className='list-item-horizontal'>
        {<Language/>}
      </ul>
      <ul className='list-item-horizontal'>
        {<Subject/>}
      </ul> 
    </div>   
  </div>
  )
};

export default DetailInfo;
