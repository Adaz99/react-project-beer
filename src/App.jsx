import "./App.scss";
import "./App.css";
import Main from "./containers/Main/main";
import NavBar from "./containers/NavBar/navBar";
import { useState, useEffect } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [beerList, setBeerList] = useState([]);
  const [AbvAlchohol, setAbvAlcohol] = useState(0);
  const [ClassicRange, setClassicRange] = useState(2022);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };
  const filtered = beerList.filter((beer) => {
    const beerLowerCase = beer.name.toLowerCase();
    return beerLowerCase.includes(searchTerm);
  });

  const getBeers = async (AbvAlchohol, ClassicRange) => {
    const url = `https://api.punkapi.com/v2/beers?abv_gt=${AbvAlchohol}&brewed_before=11-${ClassicRange}&per_page=80`;
    const result = await fetch(url);
    const beerData = await result.json();
    setBeerList(beerData);
    // console.log(beerList)
  };

  const filteracidy = () => {
    const phs = beerList.filter((beers) => beers.ph < 4);
    setBeerList(phs);
  };

  const handleOnClick = (event) => {
    if (event.target.innerText === "High Abv 6%" && AbvAlchohol === 0) {
      return setAbvAlcohol(6);
    } else if (event.target.innerText === "High Abv 6%" && AbvAlchohol === 6)
      return setAbvAlcohol(0);
    if (event.target.innerText === "Classic Range" && ClassicRange === 2022) {
      return setClassicRange(2010);
    } else if (
      event.target.innerText === "Classic Range" &&
      ClassicRange === 2010
    )
      return setClassicRange(2022);
    if (event.target.innerText === "Acidic") {
      return filteracidy();
    } else if (event.target.innerText === "Acidic" && filteracidy === 0) {
      return setBeerList();
    }
  };

  useEffect(() => {
    getBeers(AbvAlchohol, ClassicRange);
  }, [AbvAlchohol, ClassicRange]);

  return (
    <div>
      <h1>Beer API</h1>
      <div>
        <NavBar
          handleInput={handleInput}
          searchTerm={searchTerm}
          handleOnClick={handleOnClick}
        />
        <Main apiList={filtered} />
      </div>
    </div>
  );
}
export default App;
