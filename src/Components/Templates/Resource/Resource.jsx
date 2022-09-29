import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsFillArchiveFill, BsPencilFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import "../Table/Table.scss";
import "../User/User.scss";

import useFetch from "../../../hooks/useFetch";
import Pagination from "../Pagination/Pagination";
import TableStyle from "../Table/TableStyle";

const Resource = (props) => {
  let arrayPage = [];

  const { id } = useParams();

  const DataId = Number.parseInt(id);

  // Call API
  const { data, totalPage, setData } = useFetch(id, "unknown");

  for (let i = 1; i <= totalPage; i++) {
    arrayPage.push(i);
  }

  const columns = [
    { field: "id", header: "Id" },
    { field: "name", header: "Name" },
    { field: "year", header: "Year" },
    { field: "color", header: "Color" },
    { field: "pantone_value", header: "Pantone Value" },
    {
      field: "action",
      header: "Action",
      customFunction: (rowData) => (
        <div className="action">
          <button className="action-Eye">
            <AiFillEye />
          </button>
          <button className="action-Edit">
            <BsPencilFill />
          </button>
          <button className="action-Delete">
            <BsFillArchiveFill />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <h2>List Resource</h2>
      <div className="table">
        <TableStyle Data={data} headers={columns} setData={setData} />
        <Pagination
          id={DataId}
          Data={arrayPage}
          namePage={"resource"}
          totalPage={totalPage}
        />
      </div>
    </>
  );
};

export default Resource;
