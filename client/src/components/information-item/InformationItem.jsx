import React from "react";

import "./InformationItem.scss";

const InformationItem = ({ date, title, text }) => {
  return (
    <div className="information-item">
      <div className="information-item__date">
        <span>{date}</span>
      </div>
      <div className="information-item__title">
        <span>{title}</span>
      </div>
      <div className="information-item__text">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default InformationItem;
