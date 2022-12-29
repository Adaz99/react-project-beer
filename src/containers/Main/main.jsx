import "./Main.scss";
import BeerCard from "../../components/BeerCards/BeerCards";

//The Main component takes in two props beers and apiList
const Main = ({ beers, apiList }) => {
  return (
    //The Main component then renders a BeerCard component and passes the beers and apiList props to it
    <div className="beerCard">
      <BeerCard beers={beers} apiList={apiList} />
    </div>
  );
};

export default Main;
