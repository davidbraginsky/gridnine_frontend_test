import { createContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [sortParameter, setSortParameter] = useState("");
  const [filterParameters, setFilterParameters] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [airlinesList, setAirlinesList] = useState([]);
  const [oneStop, setOneStop] = useState(false);
  const [noStops, setNoStops] = useState(false);
  const [airlineParameters, setAirlineParameters] = useState([]);
  return <FilterContext.Provider value={{ sortParameter, setSortParameter, filterParameters, setFilterParameters, minPrice, setMinPrice, maxPrice, setMaxPrice, airlinesList, setAirlinesList, oneStop, setOneStop, noStops, setNoStops, airlineParameters, setAirlineParameters }}>{children}</FilterContext.Provider>;
}

export default FilterContext;
