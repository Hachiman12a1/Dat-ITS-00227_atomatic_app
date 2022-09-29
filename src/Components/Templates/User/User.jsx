import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsFillArchiveFill, BsPencilFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Pagination from "../Pagination/Pagination";
import "../Table/Table.scss";
import TableStyle from "../Table/TableStyle";
import "./User.scss";

const User = (props) => {
  let arrayPage = [];

  const { id } = useParams();

  const DataId = Number.parseInt(id);

  // Call API
  const { data, totalPage, setData } = useFetch(id, "users");

  // Get totalPage
  for (let i = 1; i <= totalPage; i++) {
    arrayPage.push(i);
  }

  const columns = [
    { field: "id", header: "Id" },
    {
      field: "avatar",
      header: "Avatar",
      customFunction: (rowData) => (
        <img className="itemImg" src={rowData.avatar} alt=""></img>
      ),
    },
    { field: "email", header: "Email" },
    { field: "first_name", header: "First Name" },
    { field: "last_name", header: "Last Name" },
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
      <h2>List User</h2>
      <div className="table">
        <TableStyle Data={data} headers={columns} setData={setData} />
        <Pagination
          id={DataId}
          Data={arrayPage}
          namePage={"user"}
          totalPage={totalPage}
          setData={setData}
        />
      </div>
    </>
  );
};

export default User;
