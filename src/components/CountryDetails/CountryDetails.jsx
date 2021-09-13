import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./CountryDetails.css";

const CountryDetails = (props) => {
  const location = useLocation();
  const countries = JSON.parse(localStorage.getItem("countries"));
  const countriesInfo = countries.find(
    (item) => item.name === location.state.name
  );
  const bordersArr = [];

  const {
    name,
    nativeName,
    flag,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = countriesInfo;

  borders.forEach((el) => {
    for (let i = 0; i < countries.length; i++) {
      if (el === countries[i].cioc) {
        bordersArr.push(countries[i]);
      }
    }
  });

  return (
    <div className="details-wrapper">
      <Link to={"/"}>
        <button className="btn back-button">
          <i className="fas fa-long-arrow-alt-left"></i>Back
        </button>
      </Link>
      <div className="details-container">
        <img className="flag" src={flag} alt={name} />
        <div className="details-div">
          <h2 className="country-name">{name}</h2>
          <div className="details">
            <div className="details-1">
              <p>
                Native Name: <span>{nativeName}</span>
              </p>
              <p>
                Population: <span>{population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>{subregion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
            </div>
            <div className="details-2">
              <p>
                Top Level Domain: <span>{topLevelDomain}</span>
              </p>
              <p>
                Currencies: <span>{currencies[0].name}</span>
              </p>

              <p>
                Languages:{" "}
                {languages.map((item, i) => {
                  if (i === languages.length - 1) {
                    return <span key={i}>{item.name}</span>;
                  } else {
                    return <span key={i}>{item.name + ", "}</span>;
                  }
                })}
              </p>
            </div>
          </div>
          <div className="borders-container">
            <span className="border-title">Borders:</span>
            <div className="borders">
              {bordersArr.map((item, id) => (
                <Link
                  key={id}
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: `/${item.name}`,
                    state: { name: item.name },
                  }}
                >
                  <button className="btn border-btn">{item.name}</button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
