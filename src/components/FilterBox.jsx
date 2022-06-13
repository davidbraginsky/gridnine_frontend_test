const FilterBox = () => {
  return (
    <div className="filter-box">
      <p className="sort__header">Фильтровать</p>
      <div className="filter__option">
        <input type="checkbox" id="1-stop" />
        <label htmlFor="1-stop">- 1 пересадка</label>
      </div>
      <div className="filter__option">
        <input type="checkbox" id="no-stops" />
        <label htmlFor="no-stops">- без пересадок</label>
      </div>
    </div>
  );
};

export default FilterBox;
