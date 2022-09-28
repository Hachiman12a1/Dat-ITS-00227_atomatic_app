import React from "react";
import NavbarLeft from "../../Molecules/Navbar/Navbar-left";
import NavbarRight from "../../Molecules/Navbar/Navbar-right";
import { Col, Row } from "antd";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="Header">
      <Row>
        <Col span={18} push={6}>
          <NavbarRight />
        </Col>
        <Col span={6} pull={18}>
          <NavbarLeft />
        </Col>
      </Row>
    </div>
  );
}

export default Header;
