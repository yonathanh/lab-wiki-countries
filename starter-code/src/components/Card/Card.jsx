import React, { Component } from "react";
import countries from "../../countries.json";
import { Link } from "react-router-dom";

const Card = props => {
  const getCard = id => {
    return countries.find(oneCountry => {
      return oneCountry.cca3 == id;
    });
  };

  const theActualCountry = getCard(props.match.params.id);
  const showBorders = () => {
    return theActualCountry.borders.map((oneCountry, index) => {
      return (
        <Link to={`/Card/${oneCountry}`}>
          <li>{getCard(oneCountry).name.official}</li>
        </Link>
      );
    });
  };

  return (
    <div style={{ width: "600px" }}>
      <div className="list-group">
        <div className="list-group-item list-group-item-action">
          <h1>{theActualCountry.name.official}</h1>
        </div>
        <div className="list-group-item list-group-item-action">
          Capital: {theActualCountry.capital}
        </div>
        <div className="list-group-item list-group-item-action">
          Area: {theActualCountry.area} km^2
        </div>
        <p style={{ textAlign: "center" }}>Borders:</p>
        <ul>{showBorders()}</ul>
      </div>
    </div>
  );
};

export default Card;
