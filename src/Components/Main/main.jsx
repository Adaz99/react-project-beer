import "./main.scss";
import BeerCard from "../beerCard/beerCard"

const Main = ({ beers }) => {
  return (
    <div>
      <BeerCard beers={beers} />
    </div>
  );
};

export default Main;
