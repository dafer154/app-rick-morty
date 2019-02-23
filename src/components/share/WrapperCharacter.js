import React, { Component } from "react";
import { Character } from "../share/Character";

export class WrapperCharacter extends Component {
  render() {
    return this.props.characters.map(character => (
      <Character
        key={character.id}
        character={character}
        title={this.props.title}
      />
    ));
  }
}
