import Flight from "./Flight";
import { useEffect, useState, useContext } from "react";
import FilterContext from "../context/FilterContext";
import Loader from "./Loader";

const FlightTable = () => {
  const [data, setData] = useState(null);
  const [dataCopy, setDataCopy] = useState(null);
  const { sortParameter, filterParameters, setAirlinesList, visible, setVisible } = useContext(FilterContext);

  const getAirlinesList = (airlineData) => {
    const carriersWithPrices = airlineData.map((item) => {
      return { airlineTitle: item.flight.carrier.caption, price: item.flight.price.total.amount };
    });

    const uniqueCarriersWithPrices = [...new Map(carriersWithPrices.map((v) => [JSON.stringify([v.airlineTitle, v.price]), v])).values()];

    const airFranceArray = uniqueCarriersWithPrices.filter((item) => item.airlineTitle === "Air France");
    const klmArray = uniqueCarriersWithPrices.filter((item) => item.airlineTitle === "KLM");
    const aeroflotArray = uniqueCarriersWithPrices.filter((item) => item.airlineTitle === "Аэрофлот - российские авиалинии");
    const turkArray = uniqueCarriersWithPrices.filter((item) => item.airlineTitle === "TURK HAVA YOLLARI A.O.");
    const finArray = uniqueCarriersWithPrices.filter((item) => item.airlineTitle === "Finnair Oyj");
    const airBalticArray = uniqueCarriersWithPrices.filter((item) => item.airlineTitle === "Air Baltic Corporation A/S");
    const alitaliArray = uniqueCarriersWithPrices.filter((item) => item.airlineTitle === "Alitalia Societa Aerea Italiana");
    const pegasusArray = uniqueCarriersWithPrices.filter((item) => item.airlineTitle === "Pegasus Hava Tasimaciligi A.S.");
    const brusselsArray = uniqueCarriersWithPrices.filter((item) => item.airlineTitle === "Brussels Airlines");
    const polishArray = uniqueCarriersWithPrices.filter((item) => item.airlineTitle === "LOT Polish Airlines");

    const airlinesArray = [airFranceArray, klmArray, aeroflotArray, turkArray, finArray, airBalticArray, alitaliArray, pegasusArray, brusselsArray, polishArray];

    let uniqueAirlinesArrayWithPrices = [];

    airlinesArray.forEach((arr) => {
      arr.sort((a, b) => a.price - b.price);
      uniqueAirlinesArrayWithPrices.push(arr[0]);
    });

    setAirlinesList(uniqueAirlinesArrayWithPrices);
  };

  const getData = async () => {
    const response = await fetch("https://raw.githubusercontent.com/davidbraginsky/gridnine_frontend_test/master/src/data/flights.json");
    const flightData = await response.json();
    setData(flightData.result.flights);
    setDataCopy(flightData.result.flights);
    getAirlinesList(flightData.result.flights);
  };

  useEffect(() => {
    getData();
  }, []);

  const sortData = () => {
    if (sortParameter) {
      const sortedData = [...data];
      if (sortParameter === "min-to-max") {
        sortedData.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
        setData(sortedData);
      } else if (sortParameter === "max-to-min") {
        console.log(sortedData);
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
  };

  useEffect(() => {
    sortData();
  }, [sortParameter]);

  useEffect(() => {
    if (filterParameters) {
      const { airlineParameters, price, stops } = filterParameters;
      const { noStops, oneStop } = stops;
      let { minPrice, maxPrice } = price;
      minPrice = Number(minPrice);
      maxPrice = Number(maxPrice);

      const copiedData = [...dataCopy];
      let airlineFilteredArray = [];
      let stopFilteredArray = [];
      let priceFilteredArray = [];
      let newFilteredFlightArray = [];

      if (noStops || oneStop) {
        if (noStops && oneStop) {
          stopFilteredArray = copiedData;
        } else if (noStops) {
          stopFilteredArray = copiedData.filter((item) => item.flight.legs[1].segments.length === 1 && item.flight.legs[0].segments.length === 1);
        } else if (oneStop) {
          stopFilteredArray = copiedData.filter((item) => item.flight.legs[1].segments.length > 1 || item.flight.legs[0].segments.length > 1);
        }
      } else if (!noStops && !oneStop) {
        stopFilteredArray = copiedData;
      }

      if (airlineParameters.length > 0) {
        airlineParameters.forEach((airline) => {
          airlineFilteredArray = [...airlineFilteredArray, stopFilteredArray.filter((item) => item.flight.carrier.caption === airline)];
        });
      } else if (airlineParameters.length === 0) {
        airlineFilteredArray = stopFilteredArray;
      }

      if (airlineParameters.length === 0) {
        if (minPrice > 0 && maxPrice > 0) {
          priceFilteredArray = airlineFilteredArray.filter((item) => item.flight.price.total.amount > minPrice && item.flight.price.total.amount < maxPrice);
        } else if (minPrice === 0 && maxPrice === 0) {
          priceFilteredArray = airlineFilteredArray;
        } else if (minPrice > 0) {
          priceFilteredArray = airlineFilteredArray.filter((item) => item.flight.price.total.amount > minPrice);
        } else if (maxPrice > 0) {
          priceFilteredArray = airlineFilteredArray.filter((item) => item.flight.price.total.amount < maxPrice);
        }
      } else {
        if (minPrice > 0 && maxPrice > 0) {
          console.log("some airlines, inside price check, both exist");
          airlineFilteredArray.forEach((arr) => {
            priceFilteredArray = [
              ...priceFilteredArray,
              arr.filter((item) => {
                if (item.flight.price.total.amount < Number(maxPrice) && item.flight.price.total.amount > Number(minPrice)) {
                  return true;
                }
              }),
            ];
          });
        } else if (minPrice === 0 && maxPrice === 0) {
          console.log("some airlines, outside price check, none exist");
          priceFilteredArray = airlineFilteredArray;
        } else if (minPrice > 0) {
          console.log("some airlines, inside min price");
          airlineFilteredArray.forEach((arr) => {
            priceFilteredArray = [...priceFilteredArray, arr.filter((item) => item.flight.price.total.amount > minPrice)];
          });
        } else if (maxPrice > 0) {
          console.log("some airlines, inside max price");
          airlineFilteredArray.forEach((arr) => {
            priceFilteredArray = [...priceFilteredArray, arr.filter((item) => item.flight.price.total.amount < maxPrice)];
          });
        }
      }

      if (airlineParameters.length === 0) {
        newFilteredFlightArray = priceFilteredArray;
      } else {
        priceFilteredArray.forEach((arr) => {
          arr.forEach((item) => {
            newFilteredFlightArray.push(item);
          });
        });
      }
      setData(newFilteredFlightArray);
    }
  }, [filterParameters]);

  const clickHandler = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  if (data) {
    return (
      <div className="flights-box">
        {data.length > 0 ? data.slice(0, visible).map((flight) => <Flight key={flight.flightToken} flight={flight} />) : "Полётов в соответсвтии с Вашим запросом не найдено. Попробуйте изменить параметры поиска."}
        <div className="button-wrapper">{visible >= data.length ? <span>Выведены все результаты</span> : <button onClick={clickHandler}>Показать ещё</button>}</div>
      </div>
    );
  }
  return <Loader />;
};

export default FlightTable;
