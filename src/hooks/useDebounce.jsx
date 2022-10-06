import { useEffect } from "react";
import { useState } from "react";

function useDebounce(delay) {
  const [searchTerm, setSearchTerm] = useState("");
  let value = window.event;

  const debounce = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      debounce(value);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return { searchTerm, debounce };
}

export default useDebounce;
