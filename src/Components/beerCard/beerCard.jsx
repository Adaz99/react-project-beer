import "./beerCard.scss";
import BeerInfo from "../beerInfo/beerInfo";

const BeerCard = (props) => {
  const { beers, apiList } = props;
  // && is used to displayed the data when it is ready
  return (
    apiList &&
    apiList.map((beer) => {
      return (
        <BeerInfo
          image={beer.image_url}
          name={beer.name}
          description={beer.description}
          first_brewed={beer.first_brewed}
          abv={beer.abv}
          ph={beer.ph}
        />
      );
    })
  );
};

export default BeerCard;
