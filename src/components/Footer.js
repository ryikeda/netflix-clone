import React from "react";
import "./Footer.css";

import githubLogo from "../images/github.png";
import linkedinLogo from "../images/linkedin.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div>This Netflix front-end clone was created with react</div>
      <div>
        Data from{" "}
        <a href="https://www.themoviedb.org/" target="_data">
          Themoviedb.org
        </a>
      </div>
      <a href="https://github.com/ryikeda/netflix-clone" target="_data">
        <img src={githubLogo}></img>
      </a>
      <a href="https://www.linkedin.com/in/rafael-ikeda/" target="_data">
        <img src={linkedinLogo}></img>
      </a>
    </div>
  );
};

export default Footer;
