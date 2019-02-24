import React, { Component } from "react";
import { Character } from "../share/Character";
import axios from "axios";

export class WrapperCharacter extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      id: null,
      pages: false,
      page: 10
    };
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.getCharacters()
  }

  getCharacters() {
    const pathLocation = window.location.pathname;
    const character = "character";
    const BASE_URL = "https://rickandmortyapi.com/api/";

    if (pathLocation === "/home") {
      this.getThreeCharactersRandom();
    } else {
        this.getAllCharacters(this.state.page)
    }
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getThreeCharactersRandom() {
    const strPath = "https://rickandmortyapi.com/api/character/";
    axios.all([
        axios.get(`${strPath}${this.getRandom(1,496)}`),
        axios.get(`${strPath}${this.getRandom(1,496)}`),
        axios.get(`${strPath}${this.getRandom(1,496)}`),
    ]).then(axios.spread((res1, res2, res3)=>{
        const randomCharacters = [];
        randomCharacters.push(res1.data);
        randomCharacters.push(res2.data);
        randomCharacters.push(res3.data);
        return this.setState({
            characters: randomCharacters
          });
    }));
  }

  getAllCharacters(page) {
    const strPath = "https://rickandmortyapi.com/api/character/";
    axios.get(`${strPath}?page=${page}`).then((res)=>{
        return this.setState({
            characters: res.data.results
          });
    })
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
