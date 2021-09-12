import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
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

  useEffect(() => {
    if (!localStorage.getItem("countries")) {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("countries", JSON.stringify(res));
          setCountries(res);
        });
    } else {
      setCountries(JSON.parse(localStorage.getItem("countries")));
    }
  }, []);

  return (
    <div className="main-container">
      <div className="filter-div">
        <div className="search-div">
          <i className="fas fa-search"></i>
          <input

            type="text"
            placeholder="Search for a country"
            value={input}
            onChange={onChangeHandler}
          />
        </div>

        <select onChange={onSelectHandler}>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Antarctica</option>
        </select>
      </div>
      <div className="countries-grid">
        {countries
          .filter((item) => item.name.toLowerCase().includes(input))
          .filter((item) => select === "" || item.region === select)
          .map((item, id) => {
            return (
              <CountryCard
                key={id}
                flag={item.flag}
                name={item.name}
                population={item.population}
                region={item.region}
                capital={item.capital}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MainView;
