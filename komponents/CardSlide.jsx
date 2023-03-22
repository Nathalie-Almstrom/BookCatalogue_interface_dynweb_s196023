import React, { useState } from 'react';
import ImageHandler from '../komponents/ImageHandler.jsx';

const ImageHandler = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  console.log(slides)

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <div className="left-arrow" onClick={prevSlide}>
        {"<<"}
      </div>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt="book cover" className="image" />
            )}
          </div>
        );
      })}
      <div className="right-arrow" onClick={nextSlide}>
       {">>"}
      </div>
    </section>
  );
};

export default ImageHandler;
