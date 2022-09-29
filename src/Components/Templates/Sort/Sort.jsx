import React from "react";
import useSort from "../../../hooks/useSort";

Sort.propTypes = {};

function Sort(props) {
  const { Headers, Data, setData } = props;
  const handleSort = useSort(Data, setData)

  return (
    <div className="searchTable-sort">
      <span>Sort by: </span>
      <select name="" id="" onChange={handleSort}>
        {Headers.map((header) => (
          <option key={header.field} value={`${header.field}`}>
            {header.header}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Sort;
