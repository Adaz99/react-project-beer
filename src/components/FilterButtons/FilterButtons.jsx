import "./FilterButtons.scss";

const FilterButtons = (props) => {
  const { handleOnClick, abvButton, classicButton, acidButton} = props;
  let activeButton2 = ""
  if (classicButton === 2010 ){
   activeButton2 = "active"
  }
 let activeButton = ""
 if (abvButton === 6 ){
  activeButton = "active"
 }
 let activeButton3 = ""
 if (acidButton === true){
  activeButton3 = "active"
 }


  return (
    <div className="Buttons">
      <p>Click The Buttons To Filter Through!</p>
      <button className={"myButton " + activeButton} onClick={handleOnClick}> High Abv 6% </button> &nbsp;
      <button className={"myButton " + activeButton2} onClick={handleOnClick}> Classic Range</button> &nbsp;
      <button className={"myButton " + activeButton3} onClick={handleOnClick}> Acidic </button> &nbsp;
      
    </div>
  );
};

export default FilterButtons;
