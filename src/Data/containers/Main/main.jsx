import "./main.scss";
import BeerCard from "../../../Components/beerCard/beerCard";

const Main = ({ beers, apiList }) => {
  return (
    <div className="beerCard">
      <BeerCard beers={beers} apiList={apiList} />
    </div>
  );
};

export default Main;
