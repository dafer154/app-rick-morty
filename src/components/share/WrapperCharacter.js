import React, { Component } from "react";
import { Character } from "../share/Character";
//import {allCharacters} from '../../actions/Service';
import axios from 'axios';

export class WrapperCharacter extends Component {

    state = {
        characters: []
      };

    componentDidMount(){
        this.allCharacters();
    }

    allCharacters(){
        const character = 'character';
        const BASE_URL = 'https://rickandmortyapi.com/api/';
        axios.get(`${BASE_URL}${character}`)
              .then(res => {
                return this.setState({
                    characters: res.data.results
                });
              });
    };

    randomCharacters(){

    }

    redirectCharacter(id){

    }



    render() {

    console.log(this.characters);

    return (
        <div style={wrapperCharacter} className="container">
        {this.state.characters.map(character => (
        <Character
          key={character.id}
          src={character.image}
          name={character.name}
          redirectCharacter = {this.redirectCharacter()}
          /> 
          ))}
        </div> ) 
  }
}


const wrapperCharacter = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '5%'

}