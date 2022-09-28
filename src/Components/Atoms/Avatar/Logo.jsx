import "antd/dist/antd.css";
import React from "react";
import "./Styles.scss";
Logo.propTypes = {};

function Logo(props) {
  return (
    <div className="logo-container">
      <div className="logo-img">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/SVG_logo.svg/768px-SVG_logo.svg.png?20220405033419"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Logo;
