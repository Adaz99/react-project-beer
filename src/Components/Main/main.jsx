import "./main.scss";
import BeerCard from "../beerCard/beerCard"


const Main = ({ beers, apiList }) => {
  return (
    <div>
      <BeerCard beers={beers} apiList={apiList} />
    </div>
  );
};

export default Main;
