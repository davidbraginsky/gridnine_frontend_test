import { useContext } from "react";
import FilterContext from "../context/FilterContext";

const PriceBox = () => {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice } = useContext(FilterContext);

  const changeHandler = (e) => {
    const { value, id } = e.target;
    if (id === "flight-min-price") {
      setMinPrice(value);
    } else if (id === "flight-max-price") {
      setMaxPrice(value);
    }
  };
  return (
    <div className="price-box">
      <p className="sort__header">Цена</p>
      <div className="price__option">
        <label htmlFor="flight-min-price">От</label>
        <input onChange={changeHandler} value={minPrice} type="number" id="flight-min-price" placeholder="0" />
      </div>
      <div className="price__option">
        <label htmlFor="flight-max-price">До</label>
        <input onChange={changeHandler} value={maxPrice} type="number" id="flight-max-price" placeholder="10000" />
      </div>
    </div>
  );
};

export default PriceBox;
