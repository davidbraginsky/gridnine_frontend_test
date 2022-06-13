import Flight from "./Flight";

const FlightTable = () => {
  return (
    <div className="flights-box">
      <Flight />
      <Flight />
      <button>Показать ещё</button>
    </div>
  );
};

export default FlightTable;
