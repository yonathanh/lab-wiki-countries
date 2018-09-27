import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Card from "../Card/Card";
import Home from "../Home/Home";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Wiki Countries</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="row">
          <div className="col-4">
            <Home />
          </div>
          <div className="col-1" />
          <Switch>
            <Route path="/Card/:id" component={Card} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
