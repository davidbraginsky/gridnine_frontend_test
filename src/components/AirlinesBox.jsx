const AirlinesBox = () => {
  return (
    <div className="airlines-box">
      <p className="sort__header">Авиакомпании</p>
      <div className="airline__option">
        <input type="checkbox" id="LOT" />
        <label htmlFor="LOT">- LOT Polish Airlines от 21049 р.</label>
      </div>
      <div className="airline__option">
        <input type="checkbox" id="SU" />
        <label htmlFor="SU">- Аэрофлот - рос... от 31733 р.</label>
      </div>
    </div>
  );
};

export default AirlinesBox;
