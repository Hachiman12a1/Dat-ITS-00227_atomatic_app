import React from "react";
import "./Footer.scss";

Footer.propTypes = {};

function Footer(props) {
  return (
    <>
      <div className="Footer-container">
        <div className="Footer-header">
          <img
            className="Footer-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/SVG_logo.svg/768px-SVG_logo.svg.png?20220405033419"
            alt=""
          />
          <p className="Footer-name">ITS Global</p>
        </div>
        <div className="Footer-body">
          <p className="Footer-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
          <div className="Footer-social">
            <i className="Footer-icon fa-brands fa-square-facebook"></i>
            <i className="Footer-icon fa-brands fa-linkedin"></i>
            <i className="Footer-icon fa-brands fa-square-whatsapp"></i>
            <i className="Footer-icon fa-brands fa-flickr"></i>
            <i className="Footer-icon fa-brands fa-square-youtube"></i>
          </div>
        </div>
        <div className="Footer-footer">
          <div className="Footer-info">
            <h2 className="Footer-title">Our Company</h2>
            <li>
              <i className="fa-sharp fa-solid fa-chevron-right"></i>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-chevron-right"></i>
              <a href="#">About</a>
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-chevron-right"></i>
              <a href="#">Work</a>
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-chevron-right"></i>
              <a href="#">Posts</a>
            </li>
          </div>
          <div className="Footer-info">
            <h2 className="Footer-title">Our Works</h2>
            <li>
              <i className="fa-sharp fa-solid fa-chevron-right"></i>
              <a href="#">Branding</a>
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-chevron-right"></i>
              <a href="#">Business</a>
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-chevron-right"></i>
              <a href="#">Marketing</a>
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-chevron-right"></i>
              <a href="#">Social Media</a>
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-chevron-right"></i>
              <a href="#">Digital Solution</a>
            </li>
          </div>
          <div className="Footer-info">
            <h2 className="Footer-title">For Client</h2>
            <div className="Footer-contact">
              <div className="Footer-phone">
                <i className="fa-sharp fa-solid fa-phone"></i>
                <p>024 7309 6556</p>
              </div>
              <div className="Footer-mail">
                <i className="fa-solid fa-inbox"></i>
                <p>admin_hr@its-global.vn </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer-copyright">
        <p>Copyright @ 2020 ITS global CO.,LTD</p>
      </div>
    </>
  );
}

export default Footer;
