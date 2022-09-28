import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Pagination.propTypes = {
    
};

function Pagination(props) {
    const {id, Data, namePage, handleClick, totalPage} = props;

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