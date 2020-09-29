import React from "react";
import "./Spinner.css";

import spinner from "../images/spinner.gif";

const Spinner = () => {
  return (
    <div className="Spinner">
      <img src={spinner} alt="Spinner"></img>
    </div>
  );
};

export default Spinner;
