const PriceBox = () => {
  return (
    <div className="price-box">
      <p className="sort__header">Цена</p>
      <div className="price__option">
        <label htmlFor="flight-min-price">От</label>
        <input type="number" id="flight-min-price" placeholder="0" />
      </div>
      <div className="price__option">
        <label htmlFor="flight-max-price">До</label>
        <input type="number" id="flight-max-price" placeholder="10000" />
      </div>
    </div>
  );
};

export default PriceBox;
