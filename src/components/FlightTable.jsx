import Flight from "./Flight";
import { useContext } from "react";
import FlightContext from "../context/FlightContext";

const FlightTable = () => {
  const { flights } = useContext(FlightContext);

  console.log(flights);
  return (
    <div className="flights-box">
      <Flight />
      <Flight />
      <button>Показать ещё</button>
    </div>
  );
};

export default FlightTable;
