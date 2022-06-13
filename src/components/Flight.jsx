import Button from "./Button";
import FlightHeader from "./FlightHeader";
import FlightSegment from "./FlightSegment";

const Flight = () => {
  return (
    <>
      <FlightHeader />
      <div className="flight__combo">
        <FlightSegment />
        <div className="blue-divider"></div>
        <FlightSegment />
        <Button />
      </div>
    </>
  );
};

export default Flight;
