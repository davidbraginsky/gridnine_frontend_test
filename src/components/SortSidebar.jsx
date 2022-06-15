import SortBox from "./SortBox";
import FilterBox from "./FilterBox";
import PriceBox from "./PriceBox";
import AirlinesBox from "./AirlinesBox";
import { useContext } from "react";
import FilterContext from "../context/FilterContext";

const SortSidebar = () => {
  const { setFilterParameters, minPrice, maxPrice, oneStop, noStops, airlineParameters } = useContext(FilterContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const filterObj = {
      airlineParameters: [],
      stops: {
        noStops: false,
        oneStop: false,
      },
      price: {
        minPrice: 0,
        maxPrice: 0,
      },
    };
    if (airlineParameters.length > 0) {
      filterObj.airlineParameters = airlineParameters;
    }
    if (noStops) {
      filterObj.stops.noStops = true;
    }
    if (oneStop) {
      filterObj.stops.oneStop = true;
    }
    if (minPrice > 1) {
      filterObj.price.minPrice = minPrice;
    }
    if (maxPrice > 1) {
      filterObj.price.maxPrice = maxPrice;
    }
    setFilterParameters(filterObj);
  };
  return (
    <div className="sort-filter-box">
      <div className="sort-filter-box__top"></div>
      <div className="boxes-container">
        <form onSubmit={submitHandler}>
          <SortBox />
          <FilterBox />
          <PriceBox />
          <AirlinesBox />
          <button type="submit">Фильтровать</button>
        </form>
      </div>
      <div className="sort-filter-box__bottom"></div>
    </div>
  );
};

export default SortSidebar;
