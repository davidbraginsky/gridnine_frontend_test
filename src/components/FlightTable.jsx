import Flight from "./Flight";
import { useEffect, useState, useContext } from "react";
import FilterContext from "../context/FilterContext";

const FlightTable = () => {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(3);
  const { sortParameter, filterParameters } = useContext(FilterContext);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/result");
    const flightData = await response.json();
    setData(flightData.flights);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (sortParameter) {
      const sortedData = [...data];
      if (sortParameter === "min-to-max") {
        sortedData.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
        setData(sortedData);
      } else if (sortParameter === "max-to-min") {
        sortedData.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
        setData(sortedData);
      } else if (sortParameter === "flight-time") {
        sortedData.sort((a, b) => {
          const totalTimeA = a.flight.legs[0].duration + a.flight.legs[1].duration;
          const totalTimeB = b.flight.legs[0].duration + b.flight.legs[1].duration;

          return totalTimeA - totalTimeB;
        });
        setData(sortedData);
      }
    }
  }, [sortParameter]);

  useEffect(() => {
    if (filterParameters.length > 0) {
      console.log(filterParameters);

      if (filterParameters.includes("1-stop") && filterParameters.includes("no-stops")) {
        console.log("inside here");
        getData();
      } else if (filterParameters.includes("no-stops")) {
        const filteredData = [...data];
        const noStopsData = filteredData.filter((item) => item.flight.legs[1].segments.length === 1 && item.flight.legs[0].segments.length === 1);
        setData(noStopsData);
      } else if (filterParameters.includes("1-stop")) {
        const filteredData = [...data];
        const oneStopData = filteredData.filter((item) => item.flight.legs[1].segments.length > 1 || item.flight.legs[0].segments.length > 1);
        setData(oneStopData);
      }
    } else {
      getData();
    }
  }, [filterParameters]);

  const clickHandler = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  if (data) {
    return (
      <div className="flights-box">
        {data.slice(0, visible).map((flight) => (
          <Flight key={flight.flightToken} flight={flight} />
        ))}
        <button onClick={clickHandler}>Показать ещё</button>
      </div>
    );
  }
  return <p>loading...</p>;
};

export default FlightTable;
