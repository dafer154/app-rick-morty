import React, { Component } from "react";
import { Character } from "../share/Character";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import './styles/WrapperCharacter.css';
import {BASE_URL} from '../../actions/Service';

export class WrapperCharacter extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
    this.onSelectId = this.onSelectId.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }

  /**
   * Nombre: getCharacters()
   * Descripción: Método que evalua en que pagina se encuentra el usuario y 
   * asi mismo renderiza los personajes
   * return Arreglo con personaje
   */

  getCharacters() {
    const pathLocation = window.location.pathname;
    if (pathLocation === "/") {
      this.getThreeCharactersRandom();
    } else {
      this.getAllCharacters(this.state.page);
    }
  }

   /**
   * Nombre: getRandom()
   * Descripción: Método que genera un número al azar entre los parámetros dados
   * @Input min: valor del límite inferior
   * @Input max: valor del límite superior
   * return Número aleatorio entre min y máx
   */

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Nombre: getThreeCharactersRandom()
   * Descripción: Método que obtiene 3 personajes aleatorios para renderizar en la ruta '/'
   * @Input min: valor del límite inferior
   * @Input max: valor del límite superior
   * return Arreglo con 3 personajes aleatorios
   */
  getThreeCharactersRandom() {
    axios
      .all([
        axios.get(`${BASE_URL}${this.getRandom(1, 496)}`),
        axios.get(`${BASE_URL}${this.getRandom(1, 496)}`),
        axios.get(`${BASE_URL}${this.getRandom(1, 496)}`)
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

    /**
   * Nombre: getAllCharacters(page)
   * Descripción: Método que obtiene los personajes por pagina para renderizar en la ruta '/personajes'
   * @Input page: pagina a renderizar
   * return Arreglo con personajes por pagina
   */
  getAllCharacters(page) {
    axios.get(`${BASE_URL}?page=${page}`).then(res => {
      return this.setState({
        characters: res.data.results
      });
    });
  }

  
  /**
   * Nombre: onSelectId(page)
   * Descripción: Método que obtiene el id del boton pagina
   * @Input e: evento del boton
   * return valor del boton---key
   */

  onSelectId(e) {
    const page = e.target.text;
    this.getAllCharacters(page);
  }

  render() {
    //URL actual del usuario dentro de la app
    const pathLocation = window.location.pathname;

    //Creacion de botones para la paginacion
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
        {pathLocation !== "/" ? (
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
