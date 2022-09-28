import React from "react";
import { Link } from "react-router-dom";
import './ItemLink.scss'
ItemLink.propTypes = {};

function ItemLink(props) {
  return (
    <div className="ItemLink-container">
      <li className="ItemLink-item">
        <Link className="ItemLink-link" to="/">Home</Link>
      </li>
      <li className="ItemLink-item">
        <Link className="ItemLink-link" to="/about">About</Link>
      </li>
      <li className="ItemLink-item">
        <Link className="ItemLink-link" to="/work">Work</Link>
      </li>
      <li className="ItemLink-item">
        <Link className="ItemLink-link" to="/post">Posts</Link>
      </li>
      <li className="ItemLink-item">
        <Link className="ItemLink-link" to={`/user/1`}>User</Link>
      </li>
      <li className="ItemLink-item">
        <Link className="ItemLink-link" to={`/resource/1`}>Resource</Link>
      </li>
    </div>  
  );
}

export default ItemLink;
