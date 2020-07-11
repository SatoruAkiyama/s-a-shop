import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/home-page/HomePage";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
