import React from "react";
import "./CountryCard.css";

const CountryCard = (props) => {
  return (
    <div className="country-card">
      <img className="country-img" src={props.flag} alt={props.name} />
      <div className="country-info">
        <h3 className="country-title">{props.name}</h3>
        <p className="population">
          <span>Population:</span> {props.population}
        </p>
        <p className="region">
          <span>Region:</span> {props.region}
        </p>
        <p className="capital">
          <span>Capital:</span> {props.capital}
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default CountryCard;
