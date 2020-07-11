import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
