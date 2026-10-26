import { useEffect, useState } from "react";

export const useDebounce = (searchText: string, time = 500) => {
  const [searchValue, setSearchText] = useState("");
  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchText(searchText);
    }, time);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchText, time]);
  return searchValue;
};
