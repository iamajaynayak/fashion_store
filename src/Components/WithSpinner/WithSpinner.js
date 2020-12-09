import React from "react";

import "./withspinner.css";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherprops }) => {
  return isLoading ? (
    <div className="spinner-overlay">
      <div className="spinner-container" />
    </div>
  ) : (
    <WrappedComponent {...otherprops} />
  );
};

export default WithSpinner;
