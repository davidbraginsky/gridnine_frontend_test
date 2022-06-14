import Button from "./Button";
import FlightHeader from "./FlightHeader";
import FlightSegment from "./FlightSegment";

const Flight = ({ flight }) => {
  const { carrier, price, legs } = flight.flight;
  const [firstLeg, secondLeg] = legs;
  return (
    <>
      <FlightHeader carrier={carrier} price={price} />
      <div className="flight__combo">
        <FlightSegment leg={firstLeg} carrier={carrier} />
        <div className="blue-divider"></div>
        <FlightSegment leg={secondLeg} carrier={carrier} />
        <Button />
      </div>
    </>
  );
};

export default Flight;
