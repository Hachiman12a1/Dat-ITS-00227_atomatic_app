import { useMemo } from "react";
import useDebounce from "./useDebounce";

useSearch.propTypes = {};

function useSearch(Data) {
  //   const [searchTerm, setSearchTerm] = useState("");

  //   // Search
  //   const handleInputChange = (e) => {
  //     setSearchTerm(e.target.value);
  //   };

  const { searchTerm, debounce } = useDebounce(3000);


  //   const debounce = useDebounce(handleInputChange, 3000);

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

  return { Items, debounce };
}

export default useSearch;
