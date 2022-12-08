import beers from './Data/Data';
import './App.css';
import Main from './Components/Main/main';
import React from 'react';
import NavBar from './Components/NavBar/navBar';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };
  const filtered = beers.filter((beer) => {
    const beerLowerCase = beer.name.toLowerCase();
    return beerLowerCase.includes(searchTerm) && beer;
  });

  return (
    <div>
    <h1>Beer api</h1>
    <div>
    <NavBar handleInput={handleInput} searchTerm={searchTerm}  />
    <Main beers={filtered} />
    </div>
    </div>
  );
}

export default App;