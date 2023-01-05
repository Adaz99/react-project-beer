import "./App.scss";
import "./App.css";
import Main from "./containers/Main/Main";
import NavBar from "./containers/NavBar/NavBar";
import { useState, useEffect } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [beerList, setBeerList] = useState([]);
  const [AbvAlchohol, setAbvAlcohol] = useState(0);
  const [ClassicRange, setClassicRange] = useState(2022);
  const [acidity, setAcidity] = useState(false);
  const [originalBeerList, setOriginalBeerList] = useState([]);


  // handleinput is called when a user types into the search box, updates searchTerm variable with the current search term
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };
  // filter the beerList based on the current searchTerm
  let filtered = beerList.filter((beer) => {
    const beerLowerCase = beer.name.toLowerCase();
    return beerLowerCase.includes(searchTerm);
  });

  if (acidity){
   filtered = filtered.filter((beers) => beers.ph < 4);
  }
  //get beersfunction that uses the AbvAlchohol and ClassicRange variables to fetch a list of beers from an API, and then updates the beerList variable with the result
  const getBeers = async (AbvAlchohol, ClassicRange) => {
    const url = `https://api.punkapi.com/v2/beers?abv_gt=${AbvAlchohol}&brewed_before=11-${ClassicRange}&per_page=80`;
    const result = await fetch(url);
    const beerData = await result.json();
    setBeerList(beerData);
    setOriginalBeerList(beerData)
  };
  // filters the beerList to only show beers with a pH level less than 4
  // const filteracidy = () => {
  //   const phs = beerList.filter((beers) => beers.ph < 4);
  //   setBeerList(phs);
  // };
  // called when the user clicks one of the buttons in the NavBar component. It updates the AbvAlchohol and ClassicRange and state variables based on which button was clicked
  // and displayed the filtered items on screen
  const handleOnClick = (event) => {
    //If the inner text of the clicked element is "High Abv 6%"
    //the function will set the AbvAlchohol state variable to 6 if it is currently 0, or set it to 0 if it is currently 6
    if (event.target.innerText === "High Abv 6%" && AbvAlchohol === 0) {
      return setAbvAlcohol(6);
    } else if (event.target.innerText === "High Abv 6%" && AbvAlchohol === 6)
      return setAbvAlcohol(0);
    // if the inner text of the clicked element is "Classic Range"
    // the function will set the ClassicRange state variable to 2010 if it is currently 2022, or set it to 2022 if it is currently 2010
    if (event.target.innerText === "Classic Range" && ClassicRange === 2022) {
      return setClassicRange(2010);
    } else if (  event.target.innerText === "Classic Range" &&  ClassicRange === 2010 )
      return setClassicRange(2022);
    //will call the filteracidy function, which filters the beerList state variable to include only beers with a pH less than 4
    if (event.target.innerText === "Acidic") {
      if (acidity) {
        setBeerList(originalBeerList);
        setAcidity(false);  // set acidity to false
      } else {  // if acidity is false, apply the filter and set acidity to true
        setAcidity(true);
      }
    }
  };
  
  
  //useEffect() hook is used to call getBeers() whenever the AbvAlchohol or ClassicRange variables change
  useEffect(() => {
    getBeers(AbvAlchohol, ClassicRange);
  }, [AbvAlchohol, ClassicRange,]);

  //App component renders a NavBar component, passing it the handleInput, searchTerm, and handleOnClick functions as props.
  // It also renders a Main component, passing it the filtered beer list as a prop.
  return (
    <div>
      <h1>Beer API</h1>
      <div>
        <NavBar
          handleInput={handleInput}
          searchTerm={searchTerm}
          handleOnClick={handleOnClick}
          classicButton={ClassicRange}
          abvButton={AbvAlchohol}
          acidButton={acidity}
        />
        <Main apiList={filtered} />
      </div>
    </div>
  );
}
export default App;
