import React, { Component } from "react";
import { Character } from "../share/Character";
import axios from "axios";

export class WrapperCharacter extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      id: null,
      pages: false
    };
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.allCharacters();
  }

  allCharacters() {
    const pathLocation = window.location.pathname;
    const character = "character";
    const BASE_URL = "https://rickandmortyapi.com/api/";

    if (pathLocation === "/home") {
      axios.get(`${BASE_URL}${character}`).then(res => {
        return this.setState({
          characters: res.data.results.slice(0, 3)
        });
      });
    } else {
      axios.get(`${BASE_URL}${character}`).then(res => {
        return this.setState({
          characters: res.data.results
        });
      });
    }
  }

  randomCharacters() {
    //create number random for show the characters
  }

  onSelect(id) {
    return this.props.history.push(`/character/${id}`);
  }

  render() {
    return (
      <div style={wrapperCharacter} className="container">
        {this.state.characters.map(character => (
          <Character
            key={character.id}
            pkCharacter={character.id}
            src={character.image}
            name={character.name}
            onSelect={this.onSelect}
          />
        ))}
      </div>
    );
  }
}

const wrapperCharacter = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  margin: "5%"
};
