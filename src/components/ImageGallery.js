import React, { useState } from "react";
import ImageElement from "./ImageElement";

const ImageGallery = ({ imageList, imageAmount = null }) => {
  const [positionImage, setPositionImage] = useState(0);
  const [hideElement, setHideElement] = useState(false);

  const movePicture = (isLeft = false, direction) => {
    const lengthList = imageList.length - 1;
    let currentPos = direction();
    const movement = isLeft ? currentPos < 0 : currentPos > lengthList;

    if (movement) {
      currentPos = isLeft ? lengthList : 0;
      setPositionImage(currentPos);
    } else {
      setPositionImage(currentPos);
    }
  };

  const moveLeft = () => {
    setHideElement(true);
    setTimeout(() => setHideElement(false), 100);
    return positionImage - 1;
  };
  const moveRight = () => {
    setHideElement(true);
    setTimeout(() => setHideElement(false), 100);
    return positionImage + 1;
  };

  const getCurrentImagePosition = () => positionImage + 1;
  const getLimitGallery = () => imageAmount || imageList.length;

  return (
    <div>
      <h3>Images quantity: {imageAmount}</h3>
      <h4>
        We are watching {`${getCurrentImagePosition()} / ${getLimitGallery()}`}
      </h4>

      <button onClick={() => movePicture(true, moveLeft)}>left</button>
      <button onClick={() => movePicture(undefined, moveRight)}>right</button>
      <div
        style={{
          width: "132px",
          overflowX: "auto",
          display: "flex",
          margin: "0 auto",
        }}
      >
        {imageList[positionImage] !== undefined && (
          <ImageElement url={imageList[positionImage].url} hide={hideElement} />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
