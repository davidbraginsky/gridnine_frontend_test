import { useContext } from "react";
import FilterContext from "../context/FilterContext";

const SortBox = () => {
  const { setSortParameter } = useContext(FilterContext);

  const changeHandler = (e) => {
    const { id } = e.target;
    setSortParameter(id);
  };

  return (
    <div className="sort-box">
      <p className="sort__header">Сортировать</p>
      <div className="sort__option">
        <input onChange={changeHandler} type="radio" name="flight-sort" id="min-to-max" />
        <label htmlFor="min-to-max">- по возрастанию цены</label>
      </div>
      <div className="sort__option">
        <input onChange={changeHandler} type="radio" name="flight-sort" id="max-to-min" />
        <label htmlFor="max-to-min">- по убыванию цены</label>
      </div>
      <div className="sort__option">
        <input onChange={changeHandler} type="radio" name="flight-sort" id="flight-time" />
        <label htmlFor="flight-time">- по времени в пути</label>
      </div>
    </div>
  );
};

export default SortBox;
