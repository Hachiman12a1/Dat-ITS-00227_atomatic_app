import "antd/dist/antd.css";
import React from "react";
import ItemLink from "../../Atoms/Navlink/ItemLink";
import './Navbar-right.scss'

NavbarRight.propTypes = {};

function NavbarRight(props) {
  return (
    <div className = "navbar-container">
        <ItemLink/>
    </div>
  );
}

export default NavbarRight;
