const FlightSegment = () => {
  return (
    <div className="flight">
      <div className="flight__info">
        <div className="flight__info-section">
          <div className="flight__departure">
            <span className="flight__departure-airport">Москва, ШЕРЕМЕТЬЕВО</span>
            <span className="flight__departure-airportID">(SVO)</span>
          </div>
          <div className="arrow">
            <i class="fa-solid fa-arrow-right-long"></i>
          </div>
          <div className="flight__arrival">
            <span className="flight__arrival-airport">ЛОНДОН, Лондон, Хитроу</span>
            <span className="flight__arrival-airportID">(LHR)</span>
          </div>
        </div>
        <div className="grey-divider"></div>
        <div className="flight__info-section-duration">
          <div className="flight__length">
            <div className="flight__length-block">
              <div className="flight__departure-time">20:40</div>
              <div className="flight__departure-date">18 авг. вт</div>
            </div>
            <div className="flight__length-block">
              <div className="flight__total-flight-time">
                <img src="icons/wall-clock.png" alt="icon of a clock" />
                14 ч 45 мин
              </div>
            </div>
            <div className="flight__length-block">
              <div className="flight__arrival-date">19 авг. ср</div>
              <div className="flight__arrival-time">09:25</div>
            </div>
          </div>
          <div className="flight__segments">
            <div className="flight__segment-divider"></div>
            <span className="flight__stops">1 пересадка</span>
            <div className="flight__segment-divider"></div>
          </div>
          <div className="flight__company">Рейс выполняет: LOT Polish Airlines</div>
        </div>
      </div>
    </div>
  );
};

export default FlightSegment;
