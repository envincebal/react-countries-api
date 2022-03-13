import React from "react";
import { Link } from "react-router-dom";

import "./CountryCard.css";

const CountryCard = ({name, population, region, flag, capital}) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{
        pathname: `/${name}`,
        state: { name: name },
      }}
    >
      <div className="country-card">
        <img className="country-img" src={flag} alt={name} />
        <div className="country-info">
          <h3 className="country-title">{name}</h3>
          <p className="population">
            Population: <span>{population.toLocaleString()}</span>
          </p>
          <p className="region">
            Region: <span>{region}</span>
          </p>
          <p className="capital">
            Capital: <span>{capital}</span>
          </p>
          <p></p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
