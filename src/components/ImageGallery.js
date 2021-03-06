import React, { useState } from "react";
import ImageElement from "./ImageElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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

      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => movePicture(true, moveLeft)}
          style={{ cursor: "pointer" }}
          size="lg"
        />
        <div
          style={{
            width: "132px",
            overflowX: "auto",
            display: "flex",
            margin: "0 auto",
          }}
        >
          {imageList[positionImage] !== undefined && (
            <ImageElement
              url={imageList[positionImage].url}
              hide={hideElement}
            />
          )}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => movePicture(undefined, moveRight)}
          style={{ cursor: "pointer" }}
          size="lg"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
