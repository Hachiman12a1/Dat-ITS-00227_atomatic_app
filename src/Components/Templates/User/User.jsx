import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Table/Table.scss";
import "./User.scss";
import { getuser } from "../../../api/table";
import TableStyle from "../Table/TableStyle";
import Pagination from "../Pagination/Pagination";


const User = (props) => {
  const [users, setUsers] = useState([]);
  const [totalPage, setTotalPage] = useState([]);

  let arrayPage = [];

  const { id } = useParams();

  const DataId = Number.parseInt(id);

  for (let i = 1; i <= totalPage; i++) {
    arrayPage.push(i);
  }

  const ApiUser = async () => {
    try {
      const { data } = await getuser(id);
      setUsers(data.data);
      setTotalPage(data.total_pages);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    ApiUser();
  }, []);

  // Pagination
  const handleClick = async (index) => {
    const { data } = await getuser(index);
    setUsers(data.data);
  };


  const columns = [
    { field: "id", header: "Id" },
    { field: "avatar", header : "Avatar" },
    { field: "email", header : "Email" },
    { field: "first_name", header : "First Name" },
    { field: "last_name", header : "Last Name" },
  ];

  return (
    <>
      <h2>List User</h2>
      <div className="table">
        <TableStyle Data={users} headers={columns} setData={setUsers} />
        <Pagination
          id={DataId}
          Data={arrayPage}
          namePage={"user"}
          handleClick={handleClick}
          totalPage={totalPage}
        />
      </div>
    </>
  );
};

export default User;
