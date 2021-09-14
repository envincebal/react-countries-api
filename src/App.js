import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import MainView from "./components/MainView/MainView";
import CountryDetails from "./components/CountryDetails/CountryDetails";

import "./css/index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = (e) => {
    e.preventDefault();

    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Router>
        <Navbar toggleMode={toggleMode} />
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/:details" render={() => <CountryDetails />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
