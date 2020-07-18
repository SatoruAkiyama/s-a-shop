import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${pathname}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
