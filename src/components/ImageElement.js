import React from "react";

const ImageElement = React.memo(({ url, hide }) => {
  return url ? (
    <img
      src={url}
      className={hide ? "hide" : "fade-in"}
      alt=""
      width="132"
      height="400"
      style={{
        flexShrink: 0,
      }}
    />
  ) : null;
});

export default ImageElement;
