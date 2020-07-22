import React from "react";

import Directory from "../../components/directory/Directory";
import HeaderImage from "../../components/header-image/HeaderImage";
import Information from "../../components/information/Information";

import headerImageData from "../../data/headerImageData";

import "./HomePage.scss";

const HomePage = () => {
  const imageUrl = headerImageData.home;
  return (
    <>
      <HeaderImage imageUrl={imageUrl} large>
        <h1>S&A</h1>
        <p>Enjoy your life with fashion!</p>
      </HeaderImage>
      <div className="homepage">
        <h2 className="category">CATEGORY</h2>
        <Directory />
        <Information />
      </div>
    </>
  );
};

export default HomePage;
