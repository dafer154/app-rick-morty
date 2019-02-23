import React,{Component} from 'react';
import {WrapperCharacter} from '../share/WrapperCharacter';

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
            <WrapperCharacter />
        )
    }
}

export default Home;