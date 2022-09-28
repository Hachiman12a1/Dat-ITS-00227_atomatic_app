import React from "react";
import "./About.scss";

About.propTypes = {};

function About(props) {
  return (
    <div className="About-container">
      <h1 className="About-header">About Me</h1>
      <div className="About-body">
        <div className="About-top">
          <i className=" About-icon fa-sharp fa-solid fa-gift"></i>
          <span className="About-title">Make Success for future</span>
        </div>
        <div className = "About-bottom">
          <span className = "About-description">
            You are free to use this template for your commercial or business
            websites. Sapien tellus vel ipsum. Pellentesque in ipsum ut orci
            vehicula sagittis et in libero. Etiam a neques. It is too easy to
            illegally copy and repost this template.
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
