const FlightSegment = ({ leg, carrier }) => {
  const { duration, segments } = leg;

  const { caption: airlineTitle } = carrier;

  let firstFlight = undefined;
  let secondFlight = undefined;
  let singleFlight = undefined;

  if (segments.length > 1) {
    firstFlight = segments[0];
    secondFlight = segments[1];

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

    const newDepartureFlightDate = new Date(departureFlightDate);
    const formatedDepartureFlightDate = newDepartureFlightDate.toLocaleDateString("ru", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

    const dateArr = formatedDepartureFlightDate.split(",");
    let [weekday, fullDate] = dateArr;
    weekday = weekday.substring(0, 2);
    let month = fullDate.replace(/[^а-яА-Я]/g, "").substring(0, 3);
    let dayOfMonth = departureFlightDate.substring(8, 10);

    const arrivalFlightTime = arrivalDate.substring(11, 16);
    const arrivalFlightDate = arrivalDate.substring(0, 10);

    const newArrivalFlightDate = new Date(arrivalFlightDate);
    const formatedArrivalFlightDate = newArrivalFlightDate.toLocaleDateString("ru", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

    const arrivalDateArr = formatedArrivalFlightDate.split(",");
    let [arrivalWeekday, arrivalFullDate] = arrivalDateArr;
    arrivalWeekday = arrivalWeekday.substring(0, 2);
    let arrivalMonth = arrivalFullDate.replace(/[^а-яА-Я]/g, "").substring(0, 3);
    let arrivalDayOfMonth = arrivalFlightDate.substring(8, 10);

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
                  {`${dayOfMonth} ${month}. `}
                  {weekday === "че" ? "чт" : weekday}
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
              <span className="flight__stops">1 пересадка</span>
              <div className="flight__segment-divider"></div>
            </div>
            <div className="flight__company">Рейс выполняет: {airlineTitle}</div>
          </div>
        </div>
      </div>
    );
  } else {
    singleFlight = segments[0];

    const {
      departureCity: { caption: departureCityTitle },
      departureAirport: { caption: departureAirportTitle, uid: departureAirportUID },
      departureDate,
      arrivalCity: { caption: arrivalCityTitle },
      arrivalAirport: { caption: arrivalAirportTitle, uid: arrivalAirportUID },
      arrivalDate,
    } = singleFlight;

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
              <span className="flight__stops">без пересадок</span>
              <div className="flight__segment-divider"></div>
            </div>
            <div className="flight__company">Рейс выполняет: {airlineTitle}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default FlightSegment;
