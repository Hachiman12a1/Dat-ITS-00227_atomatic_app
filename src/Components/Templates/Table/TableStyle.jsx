import React, { useMemo, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useDebounce from "./../../../hooks/useDebounce";
import "./Table.scss";

const TableStyle = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("ASC");

  const { headers, Data, setData } = props;

  // Search
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const debounce = useDebounce(handleInputChange, 3000);

  const Items = useMemo(() => {
    if (!searchTerm) return Data;

    return Data?.filter((data) => {
      return (
        data?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data?.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data?.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data?.year
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        data?.pantone_value?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [Data, searchTerm]);

  const onSortChange = (e) => {
    const value = e.target.value;
    if (value) {
      if (order === "ASC") {
        if (value === "id") {
          const sorted = [...Data].sort((a, b) =>
            a[value] > b[value] ? 1 : -1
          );
          setData(sorted);
          setOrder("DESC");
        } else {
          const sorted = [...Data].sort((a, b) =>
            a[value].toString().toLowerCase() >
            b[value].toString().toLowerCase()
              ? 1
              : -1
          );
          setData(sorted);
          setOrder("DESC");
        }
      }
      if (order === "DESC") {
        if (value === "id") {
          const sorted = [...Data].sort((a, b) =>
            a[value] < b[value] ? 1 : -1
          );
          setData(sorted);
          setOrder("ASC");
        } else {
          const sorted = [...Data].sort((a, b) =>
            a[value].toString().toLowerCase() <
            b[value].toString().toLowerCase()
              ? 1
              : -1
          );
          setData(sorted);
          setOrder("ASC");
        }
      }
    }
  };

  return (
    <>
      <div className="table">
        <div className="searchTable">
          <div className="searchTable-item">
            <input type="text" placeholder="Search..." onChange={debounce} />
            <AiOutlineSearch className="searchIcon" />
          </div>
          <div className="searchTable-sort">
            <span>Sort by: </span>
            <select name="" id="" onChange={onSortChange}>
              {headers.map((header) => (
                <option key={header.field} value={`${header.field}`}>
                  {header.header}
                </option>
              ))}
            </select>
          </div>
        </div>
        <table className="bodyTable">
          <thead>
            <tr>
              {headers.map((header) => {
                return <th key={header.field}>{header.header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {Items.map((data) => (
              <tr key={data.id}>
                {headers.map((header) => (
                  <th key={header?.field}>
                    {header?.customFunction ? (
                      header.customFunction(data)
                    ) : (
                      <span>{data[header.field]}</span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableStyle;
