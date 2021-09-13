import React from "react";
import { Link } from "react-router-dom";

import "./CountryCard.css";

const CountryCard = (props) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{
        pathname: `/${props.name}`,
        state: { name: props.name },
      }}
    >
      <div className="country-card">
        <img className="country-img" src={props.flag} alt={props.name} />
        <div className="country-info">
          <h3 className="country-title">{props.name}</h3>
          <p className="population">
            Population: <span>{props.population.toLocaleString()}</span>
          </p>
          <p className="region">
            Region: <span>{props.region}</span>
          </p>
          <p className="capital">
            Capital: <span>{props.capital}</span>
          </p>
          <p></p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
