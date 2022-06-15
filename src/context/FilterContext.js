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
  const [visible, setVisible] = useState(3);
  return <FilterContext.Provider value={{ sortParameter, setSortParameter, filterParameters, setFilterParameters, minPrice, setMinPrice, maxPrice, setMaxPrice, airlinesList, setAirlinesList, oneStop, setOneStop, noStops, setNoStops, airlineParameters, setAirlineParameters, visible, setVisible }}>{children}</FilterContext.Provider>;
}

export default FilterContext;
