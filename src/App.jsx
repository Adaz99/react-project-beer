import "./App.scss";
import "./App.css";
import Main from "./Components/Main/main";
import NavBar from "./Components/NavBar/navBar";
import { useState, useEffect } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [beerList, setBeerList] = useState([]);

  const [AbvAlchohol, setAbvAlcohol] = useState(0);
  const [ClassicRange, setClassicRange] = useState(2022);
  const [Acidic, setAcidic] = useState(0);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };
  const filtered = beerList.filter((beer) => {
    const beerLowerCase = beer.name.toLowerCase();
    return beerLowerCase.includes(searchTerm);
  
  });

  const getBeers = async (AbvAlchohol, ClassicRange) => {
    const url = `https://api.punkapi.com/v2/beers?abv_gt=${AbvAlchohol}&brewed_before=11-${ClassicRange}`;
    const result = await fetch(url);
    const beerData = await result.json();
    setBeerList(beerData);
    // console.log(beerList)
  };

  const filterAcidic = (beersList) => {
    return beersList.filter((beer) => beer.ph < 4)
  
}

  const handleOnClick = (event) => {
    if (event.target.innerText === "High Abv 6%") {
      return setAbvAlcohol(6);
    }
    if (event.target.innerText === "Classic Range") {
      return setClassicRange(2010);
    }
    if (event.target.innerText === "Acidic") {
      return filterAcidic();
    }
  };
  console.log(filterAcidic)

 

  useEffect(() => {
    getBeers(AbvAlchohol, ClassicRange);
  }, [AbvAlchohol, ClassicRange]);

  return (
    <div>
      <h1>Beer api</h1>
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
