import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import ListCharacters from "./components/ListCharacters/ListCharacters";
import DetailCharacter from "./components/DetailCharacter/DetailCharacter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/List-character" component={ListCharacters} />
          <Route path="/character/:id" component={DetailCharacter} />
        </Switch>
      </div>
    );
  }
}

export default App;
