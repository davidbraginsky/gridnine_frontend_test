import { createContext, useState, useEffect } from "react";

const FlightContext = createContext();

export function FlightProvider({ children }) {
  const [flights, setFlights] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/result");
    const data = await response.json();
    setFlights(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <FlightContext.Provider value={{ flights }}>{children}</FlightContext.Provider>;
}

export default FlightContext;
