import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import MainView from "./components/MainView/MainView";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route exact path="/:details" render={() => (
            <CountryDetails />
          )} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
