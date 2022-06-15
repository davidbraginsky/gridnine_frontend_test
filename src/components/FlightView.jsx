const FlightView = ({ flight }) => {
  const { defaultDepartureCity, departureAirportTitle, departureAirportUID, departureFlightTime, arrivalFlightTime, departureWeekday, departureMonth, departureDayOfMonth, arrivalWeekday, arrivalMonth, arrivalDayOfMonth, hrs, min, defaultCity, arrivalAirportTitle, arrivalAirportUID, airlineTitle, multipleFlights } = flight;

  return (
    <div className="flight">
      <div className="flight__info">
        <div className="flight__info-section">
          <div className="flight__departure">
            <span className="flight__departure-airport">
              {defaultDepartureCity.caption}, {departureAirportTitle}
            </span>
            <span className="flight__departure-airportID">({departureAirportUID})</span>
          </div>
          <div className="arrow">
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
          <div className="flight__arrival">
            <span className="flight__arrival-airport">
              {defaultCity.caption}, {arrivalAirportTitle}
            </span>
            <span className="flight__arrival-airportID">({arrivalAirportUID})</span>
          </div>
        </div>
        <div className="grey-divider"></div>
        <div className="flight__info-section-duration">
          <div className="flight__length">
            <div className="flight__length-block">
              <div className="flight__departure-time">{departureFlightTime}</div>
              <div className="flight__departure-date">
                {`${departureDayOfMonth} ${departureMonth}. `}
                {departureWeekday === "че" ? "чт" : departureWeekday}
              </div>
            </div>
            <div className="flight__length-block">
              <div className="flight__total-flight-time">
                <img src="icons/wall-clock.png" alt="icon of a clock" />
                {hrs} ч {min} мин
              </div>
            </div>
            <div className="flight__length-block">
              <div className="flight__arrival-date">
                {`${arrivalDayOfMonth} ${arrivalMonth}. `}
                {arrivalWeekday === "че" ? "чт" : arrivalWeekday}
              </div>
              <div className="flight__arrival-time">{arrivalFlightTime}</div>
            </div>
          </div>
          <div className="flight__segments">
            <div className="flight__segment-divider"></div>
            <span className="flight__stops">{multipleFlights ? "1 пересадка" : "без пересадок"}</span>
            <div className="flight__segment-divider"></div>
          </div>
          <div className="flight__company">Рейс выполняет: {airlineTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default FlightView;
