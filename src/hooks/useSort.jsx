import { useState } from "react";

useSort.propTypes = {};

function useSort(Sort, setSort) {
  const [order, setOrder] = useState("ASC");

  const handleSort = (e) => {
    const value = e.target.value;
    if (value) {
      if (order === "ASC") {
        if (value === "id") {
          const sorted = [...Sort].sort((a, b) =>
            a[value] > b[value] ? 1 : -1
          );
          setSort(sorted);
          setOrder("DESC");
        } else {
          const sorted = [...Sort].sort((a, b) =>
            a[value].toString().toLowerCase() >
            b[value].toString().toLowerCase()
              ? 1
              : -1
          );
          setSort(sorted);
          setOrder("DESC");
        }
      }
      if (order === "DESC") {
        if (value === "id") {
          const sorted = [...Sort].sort((a, b) =>
            a[value] < b[value] ? 1 : -1
          );
          setSort(sorted);
          setOrder("ASC");
        } else {
          const sorted = [...Sort].sort((a, b) =>
            a[value].toString().toLowerCase() <
            b[value].toString().toLowerCase()
              ? 1
              : -1
          );
          setSort(sorted);
          setOrder("ASC");
        }
      }
    }
  };
  return handleSort;
}

export default useSort;
