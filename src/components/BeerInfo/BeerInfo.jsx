import "./BeerInfo.scss";


const BeerInfo = (props) => {
  const { image, name, description, first_brewed, abv, ph } = props;

  return (
    <div className="beer">
      <div>
      <img className="beer__img" src={image} alt="" />
      </div>
      <h1>{name}</h1>
      <p className="beer_des">{description}</p>
      <div className="beer__info">
      <p>First brewed: {first_brewed}</p>
      <p>abv: {abv}%</p>
      <p>ph: {ph}</p>
      </div>
    </div>
    
  );
};

export default BeerInfo;
