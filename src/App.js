function App() {
  return (
    <>
      <div className="container">
        <div className="flights-table">
          <div className="sort-filter-box">
            <div className="sort-filter-box__top"></div>
            <div className="boxes-container">
              <div className="sort-box">
                <p className="sort__header">Сортировать</p>
                <div className="sort__option">
                  <input type="radio" name="flight-sort" id="min-to-max" />
                  <label htmlFor="min-to-max">- по возрастанию цены</label>
                </div>
                <div className="sort__option">
                  <input type="radio" name="flight-sort" id="max-to-min" />
                  <label htmlFor="max-to-min">- по убыванию цены</label>
                </div>
                <div className="sort__option">
                  <input type="radio" name="flight-sort" id="flight-time" />
                  <label htmlFor="flight-time">- по времени в пути</label>
                </div>
              </div>
              <div className="filter-box">
                <p className="sort__header">Фильтровать</p>
                <div className="filter__option">
                  <input type="checkbox" id="1-stop" />
                  <label htmlFor="1-stop">- 1 пересадка</label>
                </div>
                <div className="filter__option">
                  <input type="checkbox" id="no-stops" />
                  <label htmlFor="no-stops">- без пересадок</label>
                </div>
              </div>
              <div className="price-box">
                <p className="sort__header">Цена</p>
                <div className="price__option">
                  <label htmlFor="flight-min-price">От</label>
                  <input type="number" id="flight-min-price" placeholder="0" />
                </div>
                <div className="price__option">
                  <label htmlFor="flight-max-price">До</label>
                  <input type="number" id="flight-max-price" placeholder="10000" />
                </div>
              </div>
              <div className="airlines-box">
                <p className="sort__header">Авиакомпании</p>
                <div className="airline__option">
                  <input type="checkbox" id="LOT" />
                  <label htmlFor="LOT">- LOT Polish Airlines от 21049 р.</label>
                </div>
                <div className="airline__option">
                  <input type="checkbox" id="LOT" />
                  <label htmlFor="LOT">- Аэрофлот - рос... от 31733 р.</label>
                </div>
              </div>
            </div>
            <div className="sort-filter-box__bottom"></div>
          </div>
          <div className="flights-box">
            <div className="flight__combo">
              <div className="flight">
                <div className="flight__header">
                  <div className="flight__logo">
                    <img src="https://pics.avs.io/200/200/LO.png" alt="airline carrier logo" />
                  </div>
                  <div className="flight__price">21049 &#8381;</div>
                </div>
                <div className="flight__info">
                  <div className="flight__info-section">
                    <div className="flight__departure">Москва, Шереметьево (SVO)</div>
                    <div className="arrow">
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                    <div className="flight__arrival">Лондон, Лондон, Хитроу (LHR)</div>
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
                          <i class="fa-solid fa-clock"></i>
                          14 ч 45 мин
                        </div>
                      </div>
                      <div className="flight__length-block">
                        <div className="flight__arrival-date">19 авг. ср</div>
                        <div className="flight__arrival-time">09:25</div>
                      </div>
                    </div>
                    <div className="flight__segments">
                      <span className="flight__stops">1 пересадка</span>
                    </div>
                    <div className="flight__company">Рейс выполняет: LOT Polish Airlines</div>
                  </div>
                </div>
              </div>
              <div className="blue-divider"></div>
              <div className="flight">
                <div className="flight__header">
                  <div className="flight__logo">
                    <img src="https://pics.avs.io/200/200/LO.png" alt="airline carrier logo" />
                  </div>
                  <div className="flight__price">21049 &#8381;</div>
                </div>
                <div className="flight__info">
                  <div className="flight__info-section">
                    <div className="flight__departure">Москва, Шереметьево (SVO)</div>
                    <div className="arrow">
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                    <div className="flight__arrival">Лондон, Лондон, Хитроу (LHR)</div>
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
                          <i class="fa-solid fa-clock"></i>
                          14 ч 45 мин
                        </div>
                      </div>
                      <div className="flight__length-block">
                        <div className="flight__arrival-date">19 авг. ср</div>
                        <div className="flight__arrival-time">09:25</div>
                      </div>
                    </div>
                    <div className="flight__segments">
                      <span className="flight__stops">1 пересадка</span>
                    </div>
                    <div className="flight__company">Рейс выполняет: LOT Polish Airlines</div>
                  </div>
                </div>
              </div>
              <button className="btn">выбрать</button>
            </div>
            <div className="flight__combo">
              <div className="flight">
                <div className="flight__header">
                  <div className="flight__logo">
                    <img src="https://pics.avs.io/200/200/LO.png" alt="airline carrier logo" />
                  </div>
                  <div className="flight__price">21049 &#8381;</div>
                </div>
                <div className="flight__info">
                  <div className="flight__info-section">
                    <div className="flight__departure">Москва, Шереметьево (SVO)</div>
                    <div className="arrow">
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                    <div className="flight__arrival">Лондон, Лондон, Хитроу (LHR)</div>
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
                          <i class="fa-solid fa-clock"></i>
                          14 ч 45 мин
                        </div>
                      </div>
                      <div className="flight__length-block">
                        <div className="flight__arrival-date">19 авг. ср</div>
                        <div className="flight__arrival-time">09:25</div>
                      </div>
                    </div>
                    <div className="flight__segments">
                      <span className="flight__stops">1 пересадка</span>
                    </div>
                    <div className="flight__company">Рейс выполняет: LOT Polish Airlines</div>
                  </div>
                </div>
              </div>
              <div className="blue-divider"></div>
              <div className="flight">
                <div className="flight__header">
                  <div className="flight__logo">
                    <img src="https://pics.avs.io/200/200/LO.png" alt="airline carrier logo" />
                  </div>
                  <div className="flight__price">21049 &#8381;</div>
                </div>
                <div className="flight__info">
                  <div className="flight__info-section">
                    <div className="flight__departure">Москва, Шереметьево (SVO)</div>
                    <div className="arrow">
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                    <div className="flight__arrival">Лондон, Лондон, Хитроу (LHR)</div>
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
                          <i class="fa-solid fa-clock"></i>
                          14 ч 45 мин
                        </div>
                      </div>
                      <div className="flight__length-block">
                        <div className="flight__arrival-date">19 авг. ср</div>
                        <div className="flight__arrival-time">09:25</div>
                      </div>
                    </div>
                    <div className="flight__segments">
                      <span className="flight__stops">1 пересадка</span>
                    </div>
                    <div className="flight__company">Рейс выполняет: LOT Polish Airlines</div>
                  </div>
                </div>
              </div>
              <button className="btn">выбрать</button>
            </div>
            <button>Показать ещё</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
