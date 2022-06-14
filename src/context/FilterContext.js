import { createContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [sortParameter, setSortParameter] = useState("");
  const [filterParameters, setFilterParameters] = useState("");
  return <FilterContext.Provider value={{ sortParameter, setSortParameter, filterParameters, setFilterParameters }}>{children}</FilterContext.Provider>;
}

export default FilterContext;
