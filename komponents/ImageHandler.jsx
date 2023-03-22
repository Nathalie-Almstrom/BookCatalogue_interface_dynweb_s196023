import React, { useState, useEffect } from 'react';
import CardSlide from '../komponents/CardSlide.jsx';

const ImageHandler = (prop) => {
  // valiables that inteprates the props.
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

/*
  const [current, setCurrent] = useState(0);
  const length = imgURL.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imgURL) || imgURL.length <= 0) {
    return null;
  }

  after RETURN 

      <section className='slider'>
      <div className='left-arrow' onClick={prevSlide}><</div>
      <div className='right-arrow' onClick={nextSlide}>></div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>

*/
