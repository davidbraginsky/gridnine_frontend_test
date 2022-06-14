const FlightHeader = ({ carrier, price }) => {
  const { airlineCode } = carrier;
  const { total } = price;
  return (
    <div className="flight__header">
      <div className="flight__logo">
        <img src={`https://pics.avs.io/200/60/${airlineCode}.png`} alt="airline carrier logo" />
      </div>
      <div className="flight__price">
        <div className="flight__price-sum">{total.amount} &#8381;</div>
        <div className="flight__price-text">Стоимость для одного взрослого пассажира</div>
      </div>
    </div>
  );
};

export default FlightHeader;
