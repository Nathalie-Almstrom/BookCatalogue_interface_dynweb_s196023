import React, { useState, useEffect } from 'react';
import CardSlide from '../komponents/CardSlide.jsx';

const ImageHandler = (prop) => {
  // valiables that inteprates the props. makes it easier to make changes if component is reused. 
  const value = prop.slideValue;
  const key = prop.slideKey;
  const size = 'M';

  const imgURL = [];

  // gives each value one url.
  value.forEach((element) => {
    imgURL.push(`https://covers.openlibrary.org/b/${key}/${element}-${size}.jpg`);
  });

  console.log(imgURL);
  console.log(value);

  return (
    <>
      <CardSlide slides={imgURL} />
    </>
  );
};

export default ImageHandler;