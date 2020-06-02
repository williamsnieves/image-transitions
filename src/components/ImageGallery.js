import React, { useState, useEffect } from "react";

const ImageGallery = ({ imageList, imageAmount }) => {
  //const [imageListOrder, setImageListOrder] = useState([]);
  const [positionImage, setPositionImage] = useState(0);

  /* useEffect(() => {
    setImageListOrder([...imageList]);
  }, [imageList]);*/

  //console.log("-----", imageListOrder);

  return (
    <div>
      <h3>Images quantity: {imageAmount}</h3>
      <h4>We are watching {`${0} / ${5}`}</h4>

      <button onClick={() => setPositionImage(2)}>left</button>
      <button onClick={() => setPositionImage(1)}>right</button>
      <div
        style={{
          width: "132px",
          overflowX: "auto",
          display: "flex",
          margin: "0 auto",
        }}
      >
        {imageList[positionImage] !== undefined && (
          <img
            src={imageList[positionImage].url}
            alt=""
            width="132"
            height="400"
            style={{
              flexShrink: 0,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
