import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import Spinner from "../../img/spinner.gif";
import "./MainView.css";

const MainView = () => {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onSelectHandler = (e) => {
    setSelect(e.target.value);
  };

  const getData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const countriesList = await response.json();

      sessionStorage.setItem("countries", JSON.stringify(countriesList));
      setCountries(countriesList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem("countries")) {
      getData();
    } else {
      setCountries(JSON.parse(sessionStorage.getItem("countries")));
    }
  }, []);

  return (
    <div className="main-container">
      <div className="filter-div">
        <div className="search-div">
          <i className="fas fa-search"></i>
          <input
            className="search-bar nav-input"
            type="text"
            placeholder="Search for a country"
            value={input}
            onChange={onChangeHandler}
          />
        </div>

        <select className="nav-input" onChange={onSelectHandler}>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Antarctica</option>
        </select>
      </div>
      <div className="countries-container">
        {countries.length === 0 ? (
          <img src={Spinner} alt="loading" className="spinner" />
        ) : (
          <div className="countries-grid">
            {countries
              .filter((item) =>
                item.name.toLowerCase().includes(input.toLowerCase())
              )
              .filter((item) => select === "" || item.region === select)
              .map((item, id) => {
                return (
                  <CountryCard
                    key={id}
                    flag={item.flags.png}
                    name={item.name}
                    population={item.population}
                    region={item.region}
                    capital={item.capital}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainView;
