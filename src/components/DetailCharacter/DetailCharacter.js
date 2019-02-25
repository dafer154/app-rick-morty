import React, { Component } from "react";
import axios from "axios";
import "./style/DetailCharacter.css";

export class DetailCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      character: {}
    };
  }

  componentWillMount() {
    if (this.state.id) {
      this.getDetails();
    }
  }

  getDetails() {
    const detail = `character/${this.state.id}`;
    const BASE_URL = "https://rickandmortyapi.com/api/";
    axios.get(`${BASE_URL}${detail}`).then(res => {
      return this.setState({
        character: res.data
      });
    });
  }

  render() {
    return (
      <div className="container" style={{ padding: "2%" }}>
        <div className="cardDetail">
          <div className="wrappImage">
            <div className="wrapImage">
              <img
                className="imageCharacter"
                src={this.state.character.image}
              />
            </div>

            <div className="wrappText">
              <div>
                <label>Genero: </label>{" "}
                <span>{this.state.character.gender}</span>
              </div>
              <div>
                <label>Especie: </label>{" "}
                <span>{this.state.character.species}</span>
              </div>
            </div>
          </div>

          <div className="wrappText">
            <h2>{this.state.character.name}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailCharacter;
