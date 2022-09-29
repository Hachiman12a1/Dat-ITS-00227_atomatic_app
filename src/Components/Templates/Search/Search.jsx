import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../Table/Table.scss";

Search.propTypes = {};

function Search(props) {
  const { Debounce } = props;

  return (
    <div className="searchTable-item">
      <input type="text" placeholder="Search..." onChange={Debounce} />
      <AiOutlineSearch className="searchIcon" />
    </div>
  );
}

export default Search;
