import FlightView from "./FlightView";

const FlightSegment = ({ leg, carrier }) => {
  const { duration, segments } = leg;
  const { caption: airlineTitle } = carrier;

  const getReadableDate = (date) => {
    const newFlightDate = new Date(date);
    const formatedDate = newFlightDate.toLocaleDateString("ru", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    const dateArr = formatedDate.split(",");
    let [weekday, fullDate] = dateArr;
    weekday = weekday.substring(0, 2);
    let month = fullDate.replace(/[^а-яА-Я]/g, "").substring(0, 3);
    let dayOfMonth = fullDate.substring(1, 3);
    return [weekday, month, dayOfMonth];
  };
  const timeConverter = (n) => {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return [rhours, rminutes];
  };

  if (segments.length > 1) {
    const firstFlight = segments[0];
    const secondFlight = segments[1];
    const multipleFlights = true;

    const {
      departureCity: defaultDepartureCity = { uid: "-", caption: "n/a" },
      departureAirport: { caption: departureAirportTitle, uid: departureAirportUID },
      departureDate,
    } = firstFlight;

    const {
      arrivalCity: defaultCity = { uid: "-", caption: "n/a" },
      arrivalAirport: { caption: arrivalAirportTitle, uid: arrivalAirportUID },
      arrivalDate,
    } = secondFlight;

    const departureFlightTime = departureDate.substring(11, 16);
    const departureFlightDate = departureDate.substring(0, 10);
    const arrivalFlightTime = arrivalDate.substring(11, 16);
    const arrivalFlightDate = arrivalDate.substring(0, 10);
    const [departureWeekday, departureMonth, departureDayOfMonth] = getReadableDate(departureFlightDate);
    const [arrivalWeekday, arrivalMonth, arrivalDayOfMonth] = getReadableDate(arrivalFlightDate);
    const [hrs, min] = timeConverter(duration);

    const flightViewObj = {
      defaultDepartureCity,
      departureAirportTitle,
      departureAirportUID,
      departureFlightTime,
      arrivalFlightTime,
      departureWeekday,
      departureMonth,
      departureDayOfMonth,
      arrivalWeekday,
      arrivalMonth,
      arrivalDayOfMonth,
      hrs,
      min,
      defaultCity,
      arrivalAirportTitle,
      arrivalAirportUID,
      airlineTitle,
      multipleFlights,
    };
    return <FlightView flight={flightViewObj} />;
  } else {
    const singleFlight = segments[0];
    const multipleFlights = false;

    const {
      departureCity: defaultDepartureCity = { uid: "-", caption: "n/a" },
      departureAirport: { caption: departureAirportTitle, uid: departureAirportUID },
      departureDate,
      arrivalCity: defaultCity = { uid: "-", caption: "n/a" },
      arrivalAirport: { caption: arrivalAirportTitle, uid: arrivalAirportUID },
      arrivalDate,
    } = singleFlight;
    const departureFlightTime = departureDate.substring(11, 16);
    const departureFlightDate = departureDate.substring(0, 10);
    const arrivalFlightTime = arrivalDate.substring(11, 16);
    const arrivalFlightDate = arrivalDate.substring(0, 10);
    const [departureWeekday, departureMonth, departureDayOfMonth] = getReadableDate(departureFlightDate);
    const [arrivalWeekday, arrivalMonth, arrivalDayOfMonth] = getReadableDate(arrivalFlightDate);
    const [hrs, min] = timeConverter(duration);

    const flightViewObj = {
      defaultDepartureCity,
      departureAirportTitle,
      departureAirportUID,
      departureFlightTime,
      arrivalFlightTime,
      departureWeekday,
      departureMonth,
      departureDayOfMonth,
      arrivalWeekday,
      arrivalMonth,
      arrivalDayOfMonth,
      hrs,
      min,
      defaultCity,
      arrivalAirportTitle,
      arrivalAirportUID,
      airlineTitle,
      multipleFlights,
    };

    return <FlightView flight={flightViewObj} />;
  }
};

export default FlightSegment;
