import Flight from "./Flight";
import { useEffect, useState } from "react";

const FlightTable = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/result");
    const flights = await response.json();
    setData(flights);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data) {
    return (
      <div className="flights-box">
        {data.flights.map((flight) => (
          <Flight key={flight.flightToken} flight={flight} />
        ))}
        <button>Показать ещё</button>
      </div>
    );
  }
  return <p>loading...</p>;
};

export default FlightTable;
