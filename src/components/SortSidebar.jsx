import SortBox from "./SortBox";
import FilterBox from "./FilterBox";
import PriceBox from "./PriceBox";
import AirlinesBox from "./AirlinesBox";

const SortSidebar = () => {
  return (
    <div className="sort-filter-box">
      <div className="sort-filter-box__top"></div>
      <div className="boxes-container">
        <SortBox />
        <FilterBox />
        <PriceBox />
        <AirlinesBox />
      </div>
      <div className="sort-filter-box__bottom"></div>
    </div>
  );
};

export default SortSidebar;
