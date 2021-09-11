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

  borders.forEach(el => {
    for (let i = 0; i < countries.length; i++) {
      if(el === countries[i].cioc){
        bordersArr.push(countries[i]);
      }
      
    }
    
  });


  return (
    <div className="details-wrapper">
      <Link to={"/"}>
        <button className="back-button"><i class="fas fa-long-arrow-alt-left"></i>Back</button>
      </Link>
      <div className="details-container">
        <img className="flag" src={flag} alt={name} />
        <div className="details-div">
          <h2 className="country-name">{name}</h2>
          <div className="details">
            <div className="details-1">
              <p>
                <span>Native Name:</span> {nativeName}
              </p>
              <p>
                <span>Population:</span> {population}
              </p>
              <p>
                <span>Region:</span> {region}
              </p>
              <p>
                <span>Sub Region:</span> {subregion}
              </p>
              <p>
                <span>Capital:</span> {capital}
              </p>
            </div>
            <div className="details-2">
              <p>
                <span>Top Level Domain:</span> {topLevelDomain}
              </p>
              <p>
                <span>Currencies:</span> {currencies[0].name}
              </p>
              {/* <p><span>Languages:</span> {languages}</p> */}
            </div>
          </div>
          {console.log(bordersArr)}
          <div className="borders-container">
            <span>Borders:</span>
            <div className="borders">
              {bordersArr.map(item => (
                    <Link
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: `/${item}`,
                      state: { name: item },
                    }}
                  >
                <button className="border-btn">{item.name}</button>
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
