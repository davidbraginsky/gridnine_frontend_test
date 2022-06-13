function App() {
  return (
    <>
      <div className="container">
        <div className="flights-table">
          <div className="sort-filter-box">
            <div className="sort-box"></div>
            <div className="filter-box"></div>
            <div className="price-box"></div>
            <div className="airlines-box"></div>
          </div>
          <div className="flights-box">
            <div className="flight">
              <div className="flight__header">
                <div className="flight__logo"></div>
                <div className="flight__price"></div>
              </div>
              <div className="flight__info">
                <div className="flight__info-section">
                  <div className="flight__departure"></div>
                  <div className="arrow"></div>
                  <div className="flight__arrival"></div>
                </div>
                <div className="grey-divider"></div>
                <div className="flight__info-section">
                  <div className="flight__length">
                    <div className="flight__departure-time"></div>
                    <div className="flight__departure-date"></div>
                    <div className="flight__total-flight-time"></div>
                    <div className="flight__arrival-date"></div>
                    <div className="flight__arrival-time"></div>
                  </div>
                  <div className="flight__segments">
                    <div className="flight__stops"></div>
                  </div>
                  <div className="flight__company"></div>
                </div>
                <div className="blue-divider"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
