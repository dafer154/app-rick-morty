import React, { Component } from "react";
import { WrapperCharacter } from "../share/WrapperCharacter";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
  return (
    <div>
    <h1>Personajes de Rick and Morty</h1>
    <WrapperCharacter />
    <div>
    <div style={{padding: '3%'}}>
    <Link style={buttonLinkCharacters}
            to={{
              pathname: `/List-character`
            }}
          >
          Ver todos
    </Link>  
    </div>
    
    </div>
    </div>
    
  );
  }
}

const buttonLinkCharacters = {
  background: 'rgb(40, 167, 69)',
  color: 'white',
  padding: '1%',
  borderRadius: '12px',
  fontWeight: 'bold'


}

export default Home;


