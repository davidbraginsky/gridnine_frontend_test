import Flight from "./Flight";
import { useEffect, useState } from "react";

const FlightTable = () => {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(3);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/result");
    const flights = await response.json();
    setData(flights);
  };

  useEffect(() => {
    getData();
  }, []);

  const clickHandler = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  if (data) {
    return (
      <div className="flights-box">
        {data.flights.slice(0, visible).map((flight) => (
          <Flight key={flight.flightToken} flight={flight} />
        ))}
        <button onClick={clickHandler}>Показать ещё</button>
      </div>
    );
  }
  return <p>loading...</p>;
};

export default FlightTable;
