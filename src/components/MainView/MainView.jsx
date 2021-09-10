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
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((res) => setCountries(res));
  }, []);

  return (
    <div className="main-container">
      <div className="filter-div">
        <input
          type="text"
          placeholder="Search for a country"
          value={input}
          onChange={onChangeHandler}
        />
        <select onChange={onSelectHandler}>
          <option>Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceana">Oceana</option>
        </select>
      </div>
      <div className="countries-grid">
        {console.log(select)}
        {countries
          .filter((item) => item.name.toLowerCase().includes(input))
          .filter((item) => item.region === select)
          .map((item, id) => {
            console.log(item.region)
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
