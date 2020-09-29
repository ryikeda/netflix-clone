import React from "react";
import "./Header.css";

import logo from "../images/logo.png";

const Header = ({ darkHeader }) => {
  return (
    <div className={`Header${darkHeader ? " black" : ""}`}>
      <div className="Header-logo">
        <a href="/">
          <img src={logo} alt="logo"></img>
        </a>
      </div>
      <div className="Header-avatar">
        <a href="/">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="avatar"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Header;
