import React, { Component } from "react";
import { Character } from "../share/Character";
//import {allCharacters} from '../../actions/Service';
import axios from 'axios';

export class WrapperCharacter extends Component {

    constructor(props){
        super(props)
        this.state= {
            characters: [],
            character: {}
        }
        this.onSelect = this.onSelect.bind(this);
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

    onSelect(id){
        console.log("jujujujuu")
        const detail = `character/${id}`;
        const BASE_URL = 'https://rickandmortyapi.com/api/';
        axios.get(`${BASE_URL}${detail}`)
              .then(res => {
                return this.setState({
                    character: res.data
                });
              })
    }

    render() {

    return (
        <div style={wrapperCharacter} className="container">
        {this.state.characters.map(character => (
        <Character
          key={character.id}
          pkCharacter={character.id}
          src={character.image}
          onSelect = {this.onSelect}
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