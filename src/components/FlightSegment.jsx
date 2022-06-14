const FlightSegment = ({ leg, carrier }) => {
  const { duration, segments } = leg;

  const { caption: airlineTitle, airlineCode } = carrier;

  let firstFlight = undefined;
  let secondFlight = undefined;

  if (segments.length > 1) {
    firstFlight = segments[0];
    secondFlight = segments[1];
  }

  const {
    departureCity: { caption: departureCityTitle },
    departureAirport: { caption: departureAirportTitle, uid: departureAirportUID },
    departureDate,
  } = firstFlight;

  const {
    arrivalCity: { caption: arrivalCityTitle },
    arrivalAirport: { caption: arrivalAirportTitle, uid: arrivalAirportUID },
    arrivalDate,
  } = secondFlight;

  const departureFlightTime = departureDate.substring(11, 16);
  const departureFlightDate = departureDate.substring(0, 10);

  const arrivalFlightTime = arrivalDate.substring(11, 16);
  const arrivalFlightDate = arrivalDate.substring(0, 10);

  const timeConverter = (n) => {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return [rhours, rminutes];
  };

  const [hrs, min] = timeConverter(duration);

  return (
    <div className="flight">
      <div className="flight__info">
        <div className="flight__info-section">
          <div className="flight__departure">
            <span className="flight__departure-airport">
              {departureCityTitle}, {departureAirportTitle}
            </span>
            <span className="flight__departure-airportID">({departureAirportUID})</span>
          </div>
          <div className="arrow">
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
          <div className="flight__arrival">
            <span className="flight__arrival-airport">
              {arrivalCityTitle}, {arrivalAirportTitle}
            </span>
            <span className="flight__arrival-airportID">({arrivalAirportUID})</span>
          </div>
        </div>
        <div className="grey-divider"></div>
        <div className="flight__info-section-duration">
          <div className="flight__length">
            <div className="flight__length-block">
              <div className="flight__departure-time">{departureFlightTime}</div>
              <div className="flight__departure-date">{departureFlightDate}</div>
            </div>
            <div className="flight__length-block">
              <div className="flight__total-flight-time">
                <img src="icons/wall-clock.png" alt="icon of a clock" />
                {hrs} ч {min} мин
              </div>
            </div>
            <div className="flight__length-block">
              <div className="flight__arrival-date">{arrivalFlightDate}</div>
              <div className="flight__arrival-time">{arrivalFlightTime}</div>
            </div>
          </div>
          <div className="flight__segments">
            <div className="flight__segment-divider"></div>
            <span className="flight__stops">1 пересадка</span>
            <div className="flight__segment-divider"></div>
          </div>
          <div className="flight__company">
            Рейс выполняет: {airlineCode} {airlineTitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSegment;
