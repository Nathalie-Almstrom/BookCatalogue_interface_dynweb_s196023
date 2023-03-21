import React, { useState, useEffect } from 'react';

const ImageHandler = (prop) => {
  /*
  ImageHandler is a component that puts together an image url object based on props provided, as prop.slideValue can have multiple values a .forEach loop assures every value is given one URL-link. To assure props has a value before creating the URL-links async/ await is used. ps. useEffect stops the loop from being infinate.
  */
  //const [imgURL, setImgURL] = useState([]);

  const value = prop.slideValue;
  const key = prop.slideKey;
  const size = 'M';

  const imgURL = [];

  value.forEach((element) => {
    imgURL.push(`{ image : https://covers.openlibrary.org/b/${key}/${element}-${size}.jpg}`)
  })



  console.log(imgURL)
  console.log(value)

  return <>{imgURL}</>;
};

export default ImageHandler;

/*
  useEffect(() => {
    const waitForIt = async () => {
      await value.forEach((element) =>
        setImgURL(
          `https://covers.openlibrary.org/b/${key}/${element}-${size}.jpg`
        )
      );
    };
    waitForIt();
  }, []);
*/