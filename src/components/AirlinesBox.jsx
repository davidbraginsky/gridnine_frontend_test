import { useContext } from "react";
import FilterContext from "../context/FilterContext";

const AirlinesBox = () => {
  const { airlinesList, setAirlineParameters } = useContext(FilterContext);

  const changeHandler = (e) => {
    const { checked, id } = e.target;
    if (checked) {
      setAirlineParameters((prevFilters) => [...prevFilters, id]);
    } else {
      setAirlineParameters((prevFilters) => prevFilters.filter((filter) => filter !== id));
    }
  };
  return (
    <div className="airlines-box">
      <p className="sort__header">Авиакомпании</p>
      {airlinesList.map((airline) => (
        <div key={airline.airlineTitle} className="airline__option">
          <input onChange={changeHandler} type="checkbox" id={airline.airlineTitle} />
          <label htmlFor={airline.airlineTitle}>
            - {airline.airlineTitle} от {airline.price} р.
          </label>
        </div>
      ))}
    </div>
  );
};

export default AirlinesBox;
