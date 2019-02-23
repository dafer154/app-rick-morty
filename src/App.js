import React, { Component } from "react";
import "./App.css";
import Header  from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import ListCharacters from "./components/ListCharacters/ListCharacters";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/List-character" component={ListCharacters} />
          </Switch>
      </div>
    );
  }
}

export default App;
