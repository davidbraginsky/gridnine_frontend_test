import Flight from "./Flight";
import { useEffect, useState, useContext } from "react";
import FilterContext from "../context/FilterContext";
import Loader from "./Loader";

const FlightTable = () => {
  const [data, setData] = useState(null);
  const [dataCopy, setDataCopy] = useState(null);
  const [visible, setVisible] = useState(3);
  const { sortParameter, filterParameters, minPrice, maxPrice, setAirlinesList, setMinPrice, setMaxPrice, setOneStop, setNoStops, setAirlineParameters } = useContext(FilterContext);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/result");
    const flightData = await response.json();
    setData(flightData.flights);
    setDataCopy(flightData.flights);

    const carriersWithPrices = flightData.flights.map((item) => {
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

  useEffect(() => {
    getData();
  }, []);

  const sortData = () => {
    if (sortParameter) {
      const sortedData = [...data];
      if (sortParameter === "min-to-max") {
        console.log("insinde min to max");
        sortedData.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
        setData(sortedData);
      } else if (sortParameter === "max-to-min") {
        console.log("insinde max to min");
        console.log(sortedData);
        sortedData.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
        setData(sortedData);
      } else if (sortParameter === "flight-time") {
        console.log("insinde flight time");
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

      if (noStops || oneStop) {
        console.log("inside stop check, one of exists");
        if (noStops && oneStop) {
          console.log("both exists");
          stopFilteredArray = copiedData;
        } else if (noStops) {
          console.log("only nostops exists");
          stopFilteredArray = copiedData.filter((item) => item.flight.legs[1].segments.length === 1 && item.flight.legs[0].segments.length === 1);
        } else if (oneStop) {
          console.log("only onestop exists");
          stopFilteredArray = copiedData.filter((item) => item.flight.legs[1].segments.length > 1 || item.flight.legs[0].segments.length > 1);
        }
      } else if (!noStops && !oneStop) {
        console.log("outside stop check, none exist");
        stopFilteredArray = copiedData;
      }

      if (airlineParameters.length > 0) {
        console.log("inside airline check, at least one exists");
        airlineParameters.forEach((airline) => {
          airlineFilteredArray = [...airlineFilteredArray, stopFilteredArray.filter((item) => item.flight.carrier.caption === airline)];
        });
      } else if (airlineParameters.length === 0) {
        console.log("outside airline check, none exist");
        airlineFilteredArray = stopFilteredArray;
      }

      if (airlineParameters.length === 0) {
        if (minPrice > 0 && maxPrice > 0) {
          console.log("no airlines, inside price check, both exist");
          priceFilteredArray = airlineFilteredArray.filter((item) => item.flight.price.total.amount > minPrice && item.flight.price.total.amount < maxPrice);
        } else if (minPrice === 0 && maxPrice === 0) {
          console.log("no airlines, outside price check, none exist");
          priceFilteredArray = airlineFilteredArray;
        } else if (minPrice > 0) {
          console.log("no airlines, inside min price");
          priceFilteredArray = airlineFilteredArray.filter((item) => item.flight.price.total.amount > minPrice);
        } else if (maxPrice > 0) {
          console.log("no airlines, inside max price");
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

      let newFilteredFlightArray = [];
      if (airlineParameters.length === 0) {
        newFilteredFlightArray = priceFilteredArray;
      } else {
        priceFilteredArray.forEach((arr) => {
          arr.forEach((item) => {
            newFilteredFlightArray.push(item);
          });
        });
      }

      console.log("copiedData:", copiedData);
      console.log("stopfiltered:", stopFilteredArray);
      console.log("airlinefiltered: ", airlineFilteredArray);
      console.log("pricefiltered:", priceFilteredArray);
      console.log("newFilteredFlightArray:", newFilteredFlightArray);
      setData(newFilteredFlightArray);

      // sortData();
    }

    // if (filterParameters) {
    //   const { airlineParameters, price, stops } = filterParameters;
    //   const { noStops, oneStop } = stops;
    //   const { minPrice, maxPrice } = price;

    //   const copiedData = [...dataCopy];
    //   let airlineFilteredArray = [];
    //   let stopFilteredArray = [];
    //   let priceFilteredArray = [];
    //   // console.log("copiedData:", copiedData);

    //   if (noStops || oneStop) {
    //     if (noStops && oneStop) {
    //       stopFilteredArray = copiedData;
    //     } else if (noStops) {
    //       stopFilteredArray = copiedData.filter((item) => item.flight.legs[1].segments.length === 1 && item.flight.legs[0].segments.length === 1);
    //     } else if (oneStop) {
    //       stopFilteredArray = copiedData.filter((item) => item.flight.legs[1].segments.length > 1 || item.flight.legs[0].segments.length > 1);
    //     }
    //   } else if (!noStops && !oneStop) {
    //     stopFilteredArray = copiedData;
    //   }

    //   if (airlineParameters.length > 0) {
    //     airlineParameters.forEach((airline) => {
    //       airlineFilteredArray = [...airlineFilteredArray, stopFilteredArray.filter((item) => item.flight.carrier.caption === airline)];
    //     });
    //   } else if (airlineParameters.length === 0) {
    //     airlineFilteredArray = stopFilteredArray;
    //   }

    //   if (minPrice > 0 && maxPrice > 0) {
    //     // console.log("inside min & max");
    //     // console.log(Number(minPrice));
    //     // console.log(Number(maxPrice));
    //     airlineFilteredArray.forEach((arr) => {
    //       priceFilteredArray = [
    //         ...priceFilteredArray,
    //         arr.filter((item) => {
    //           if (item.flight.price.total.amount < Number(maxPrice) && item.flight.price.total.amount > Number(minPrice)) {
    //             return true;
    //           }
    //         }),
    //       ];
    //     });
    //   } else if (minPrice == 0 && maxPrice == 0) {
    //     // console.log("inside no min and no max");
    //     priceFilteredArray = airlineFilteredArray;
    //   } else if (minPrice > 0) {
    //     // console.log("inside min price");
    //     // console.log(Number(minPrice));
    //     airlineFilteredArray.forEach((arr) => {
    //       priceFilteredArray = [...priceFilteredArray, arr.filter((item) => item.flight.price.total.amount > Number(minPrice))];
    //     });
    //   } else if (maxPrice > 0) {
    //     // console.log("inside max price");
    //     // console.log(Number(minPrice));
    //     airlineFilteredArray.forEach((arr) => {
    //       priceFilteredArray = [...priceFilteredArray, arr.filter((item) => item.flight.price.total.amount < Number(maxPrice))];
    //     });
    //   }

    //   // console.log("stopfiltered:", stopFilteredArray);
    //   // console.log("airlinefiltered: ", airlineFilteredArray);
    //   // console.log("pricefiltered:", priceFilteredArray);
    //   let newFilteredFlightArray = [];
    //   priceFilteredArray.forEach((arr) => {
    //     arr.forEach((item) => {
    //       newFilteredFlightArray.push(item);
    //     });
    //   });
    //   // console.log("newFilteredFlightArray:", newFilteredFlightArray);
    //   setData(newFilteredFlightArray);
    //   // sortData();
    // }
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
  return <p>Loading...</p>;
};

export default FlightTable;
