import { useContext, useState } from "react";
import FilterContext from "../context/FilterContext";

const FilterBox = () => {
  const { oneStop, setOneStop, noStops, setNoStops } = useContext(FilterContext);

  const changeHandler = (e) => {
    const { checked, id } = e.target;
    if (id === "1-stop") {
      if (checked) {
        setOneStop(true);
      } else {
        setOneStop(false);
      }
    } else if (id === "no-stops") {
      if (checked) {
        setNoStops(true);
      } else {
        setNoStops(false);
      }
    }
  };
  return (
    <div className="filter-box">
      <p className="sort__header">Фильтровать</p>
      <div className="filter__option">
        <input onChange={changeHandler} value={oneStop} type="checkbox" id="1-stop" />
        <label htmlFor="1-stop">- 1 пересадка</label>
      </div>
      <div className="filter__option">
        <input onChange={changeHandler} value={noStops} type="checkbox" id="no-stops" />
        <label htmlFor="no-stops">- без пересадок</label>
      </div>
    </div>
  );
};

export default FilterBox;
