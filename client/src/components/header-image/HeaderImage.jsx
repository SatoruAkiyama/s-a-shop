import React from "react";

import "./HeaderImage.scss";

const HeaderImage = ({ imageUrl, large, children }) => {
  return (
    <div className={`header-image ${large ? "large" : ""}`}>
      <div
        className={`${large ? "large" : ""} image`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="text">{children}</div>
    </div>
  );
};

export default HeaderImage;
