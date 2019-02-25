import React, { Component } from "react";
import { Character } from "../share/Character";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import './styles/WrapperCharacter.css';

export class WrapperCharacter extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      id: null,
      pages: false,
      page: 1
    };
    this.onSelectId = this.onSelectId.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    const pathLocation = window.location.pathname;
    const character = "character";
    const BASE_URL = "https://rickandmortyapi.com/api/";

    if (pathLocation === "/home") {
      this.getThreeCharactersRandom();
    } else {
      this.getAllCharacters(this.state.page);
    }
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getThreeCharactersRandom() {
    const strPath = "https://rickandmortyapi.com/api/character/";
    axios
      .all([
        axios.get(`${strPath}${this.getRandom(1, 496)}`),
        axios.get(`${strPath}${this.getRandom(1, 496)}`),
        axios.get(`${strPath}${this.getRandom(1, 496)}`)
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          const randomCharacters = [];
          randomCharacters.push(res1.data);
          randomCharacters.push(res2.data);
          randomCharacters.push(res3.data);
          return this.setState({
            characters: randomCharacters
          });
        })
      );
  }

  getAllCharacters(page) {
    const strPath = "https://rickandmortyapi.com/api/character/";
    axios.get(`${strPath}?page=${page}`).then(res => {
      return this.setState({
        page: page,
        characters: res.data.results
      });
    });
  }

  onSelect(id) {
    return this.props.history.push(`/character/${id}`);
  }

  onSelectId(e) {
    const page = e.target.text;
    console.log(page);
    this.getAllCharacters(page);
  }

  render() {
    const pathLocation = window.location.pathname;

    let active = 1;
    let items = [];
    for (let number = 1; number <= 25; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          value={number}
          onClick={this.onSelectId}
        >
          {number}
        </Pagination.Item>
      );
    }

    return (
      <div>
        {pathLocation !== "/home" ? (
          <div>
          <Pagination size="lg" style={wrappNumbers}>
            {items}
          </Pagination>
          <h1>Lista de personajes Rick and Morty</h1>
          </div>
        ) : (
          false
        )}
        <div className="container wrapperCharacter">
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
      </div>
    );
  }
}



const wrappNumbers = {
  display: "flex",
  flexWrap: "wrap",
  padding: "4%",
  justifyContent: "center"
};
