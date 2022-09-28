import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Table/Table.scss";
import "../User/User.scss";

import { getresource } from "../../../api/table";
import TableStyle from "../Table/TableStyle";
import Pagination from "../Pagination/Pagination";


const Resource = (props) => {
  const [resources, setResources] = useState([]);
  const [totalPage, setTotalPage] = useState([]);

  let arrayPage = [];

  const { id } = useParams();

  const DataId = Number.parseInt(id);

  for (let i = 1; i <= totalPage; i++) {
    arrayPage.push(i);
  }

  //   console.log(arrayPage);

  const ApiResource = async () => {
    try {
      const { data } = await getresource(id);
      setResources(data.data);
      setTotalPage(data.total_pages);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    ApiResource();
  }, []);

  // Search

  // Pagination
  const handleClick = async (index) => {
    const { data } = await getresource(index);
    setResources(data.data);
  };

  const columns = [
    { field: "id" , header : "Id"},
    { field: "name" , header : "Name"},
    { field: "year" , header : "Year"},
    { field: "color" , header : "Color"},
    { field: "pantone_value", header : "Pantone Value" },
  ];

  return (
    <>
      <h2>List Resource</h2>
      <div className="table">
        <TableStyle Data={resources} headers={columns} setData={setResources} />
        <Pagination
          id={DataId}
          Data={arrayPage}
          namePage={"resource"}
          handleClick={handleClick}
          totalPage={totalPage}
        />
        {/* <div className="pagination">
          <Link to={`/resource/${DataId - 1}`}>
            <button
              disabled={DataId === 1}
              className="paginationBtn"
              onClick={() => handleClick(DataId - 1)}
            >
              Previous
            </button>
          </Link>
          {arrayPage.map((total, index) => (
            <Link to={`/resource/${index + 1}`} key={index}>
              <button
                key={index}
                onClick={() => handleClick(index)}
                className="paginationBtn"
              >
                {total}
              </button>
            </Link>
          ))}
          <Link to={`/resource/${DataId + 1}`}>
            <button
              disabled={DataId === totalPage}
              className="paginationBtn"
              onClick={() => handleClick(DataId + 1)}
            >
              Next
            </button>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Resource;
