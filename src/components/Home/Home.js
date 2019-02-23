import React,{Component} from 'react';
import {WrapperCharacter} from '../share/WrapperCharacter';
import axios from 'axios';

class Home extends Component{

/*
    componentDidMount(){
        axios.get('https://rickandmortyapi.com/api/character')
          .then(res => {
            return this.setState({
              todos: res.data
            });
          });
      }
*/

    render(){
        return(
            <h1>Soy un home jujujuju</h1>
        )
    }
}

export default Home;