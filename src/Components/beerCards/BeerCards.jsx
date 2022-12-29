import "./BeerCard.scss";
import BeerInfo from "../BeerInfo/BeerInfo";

const BeerCard = (props) => {
  const { apiList } = props;
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
