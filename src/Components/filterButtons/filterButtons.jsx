import "./FilterButtons.scss";

const FilterButtons = (props) => {
  const { handleOnClick } = props;
  return (
    <div className="Buttons">
      <p>Click The Buttons To Filter Through!</p>
      <button className="myButton" onClick={handleOnClick}> High Abv 6% </button> &nbsp;
      <button className="myButton" onClick={handleOnClick}> Classic Range</button> &nbsp;
      <button className="myButton" onClick={handleOnClick}> Acidic </button> &nbsp;
      
    </div>
  );
};

export default FilterButtons;
