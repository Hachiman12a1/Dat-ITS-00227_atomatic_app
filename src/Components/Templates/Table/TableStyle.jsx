import React, { useMemo, useState } from "react";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import useDebounce from "./../../../hooks/useDebounce";
import "./Table.scss";

const TableStyle = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <>
      <div className="table">
        <div className="searchTable">
          <Search Debounce={debounce} />
          <Sort Headers={headers} Data = {Data} setData={setData}/>
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
