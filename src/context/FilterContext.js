import { createContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [sortParameter, setSortParameter] = useState("");
  return <FilterContext.Provider value={{ sortParameter, setSortParameter }}>{children}</FilterContext.Provider>;
}

export default FilterContext;
