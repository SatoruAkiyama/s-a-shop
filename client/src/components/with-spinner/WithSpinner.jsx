import React from "react";

import "./WithSpinner.scss";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="spinner-container">
      <div className="spinner" />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
