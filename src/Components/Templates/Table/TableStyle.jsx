import React from "react";
import useSearch from "../../../hooks/useSearch";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import "./Table.scss";

const TableStyle = (props) => {
  const { headers, Data, setData } = props;

  // Search
  const { Items, debounce } = useSearch(Data);

  return (
    <>
      <div className="table">
        <div className="searchTable">
          <Search Debounce={debounce} />
          <Sort Headers={headers} Data={Data} setData={setData} />
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
