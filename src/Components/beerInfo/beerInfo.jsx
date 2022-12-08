import "./beerInfo.scss";
import React from "react";

const BeerInfo = (props) => {
  const { image, name, description, first_brewed, abv, ph } = props;

  return (
    <div className="beer__info">
      <img src={image} alt="" />
      <p>{name}</p>
      <p>{description}</p>
      <p>{first_brewed}</p>
      <p>{abv}</p>
      <p>{ph}</p>
    </div>
    
  );
};

export default BeerInfo;
