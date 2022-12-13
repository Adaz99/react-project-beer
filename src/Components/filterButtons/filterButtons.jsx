import "./filterButtons.scss";

const filterButtons = (props) => {
  const { handleOnClick } = props;
  return (
    <div className="Buttons">
      <p>Click The Buttons To Filter Through!</p>
      <button className="myButton" onClick={handleOnClick}> High Abv 6% </button>
      <button className="myButton" onClick={handleOnClick}> Classic Range</button>
      <button className="myButton" onClick={handleOnClick}> Acidic </button>
      
    </div>
  );
};

export default filterButtons;
