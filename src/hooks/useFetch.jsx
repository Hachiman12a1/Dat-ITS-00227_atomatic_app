import { useEffect, useState } from "react";
import { getData } from "../api/table";
 
const useFetch = (page, namePage) => {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await getData(page, namePage);
      setData(data.data);
      setTotalPage(data.total_pages);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 
  return { data, totalPage, setData };
};
 
export default useFetch;