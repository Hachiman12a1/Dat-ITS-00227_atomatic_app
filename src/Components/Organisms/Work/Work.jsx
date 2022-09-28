import React from "react";
import "./Work.scss";
Work.propTypes = {};

function Work(props) {
  return (
    <div className="Work-container">
      <h1 className="Work-header">Work</h1>
      <div className="Work-navbar">
        <li className="Work-navlink active">All</li>
        <li className="Work-navlink">Graphics</li>
        <li className="Work-navlink">UI/UX</li>
        <li className="Work-navlink">Branding</li>
      </div>
      <div className="Work-body">
        <div className="Work-item">
          <h3 className="Work-title">UI/UX Design</h3>
          <p className="Work-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </p>
        </div>
        <div className="Work-item">
          <h3 className="Work-title">Social Media</h3>
          <p className="Work-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </p>
        </div>
        <div className="Work-item">
          <h3 className="Work-title">Marketing</h3>
          <p className="Work-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </p>
        </div>
        <div className="Work-item">
          <h3 className="Work-title">Graphic</h3>
          <p className="Work-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </p>
        </div>
        <div className="Work-item">
          <h3 className="Work-title">Digital Marketing</h3>
          <p className="Work-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </p>
        </div>
        <div className="Work-item">
          <h3 className="Work-title">Market Research</h3>
          <p className="Work-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
