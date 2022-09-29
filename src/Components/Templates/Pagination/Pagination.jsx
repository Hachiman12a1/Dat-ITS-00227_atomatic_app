import React from "react";
import { Link } from "react-router-dom";
import { getData } from "../../../api/table";

Pagination.propTypes = {};

function Pagination(props) {
  const { id, Data, namePage, setData, totalPage } = props;

  const handleClick = async (index) => {
    const { data } = await getData(index, "users");
    setData(data.data);
  };

  return (
    <div className="pagination">
      <Link to={`/${namePage}/${id - 1}`}>
        <button
          disabled={id === 1}
          className="paginationBtn"
          onClick={() => handleClick(id - 1)}
        >
          Previous
        </button>
      </Link>
      {Data.map((total, index) => (
        <Link to={`/${namePage}/${index + 1}`} key={index}>
          <button
            key={index}
            onClick={() => handleClick(index + 1)}
            className="paginationBtn"
          >
            {total}
          </button>
        </Link>
      ))}
      <Link to={`/${namePage}/${id + 1}`}>
        <button
          disabled={id === totalPage}
          className="paginationBtn"
          onClick={() => handleClick(id + 1)}
        >
          Next
        </button>
      </Link>
    </div>
  );
}

export default Pagination;
