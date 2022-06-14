import { useContext, useState } from "react";
import FilterContext from "../context/FilterContext";

const FilterBox = () => {
  const { setFilterParameters } = useContext(FilterContext);

  const changeHandler = (e) => {
    const { checked, id } = e.target;
    if (checked) {
      setFilterParameters((prevFilters) => [...prevFilters, id]);
    } else {
      setFilterParameters((prevFilters) => prevFilters.filter((filter) => filter !== id));
    }
  };
  return (
    <div className="filter-box">
      <p className="sort__header">Фильтровать</p>
      <div className="filter__option">
        <input onChange={changeHandler} type="checkbox" id="1-stop" />
        <label htmlFor="1-stop">- 1 пересадка</label>
      </div>
      <div className="filter__option">
        <input onChange={changeHandler} type="checkbox" id="no-stops" />
        <label htmlFor="no-stops">- без пересадок</label>
      </div>
    </div>
  );
};

export default FilterBox;
