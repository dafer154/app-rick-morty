import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Character.css";
export class Character extends Component {
  render() {
    return (
      <div className="card cardResponsive">
        <img
          src={this.props.src}
          className="card-img-top"
          alt={this.props.name}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <Link
            className="buttonLink"
            to={{
              pathname: `/character/${this.props.pkCharacter}`
            }}
          >
            Detalle
          </Link>
        </div>
      </div>
    );
  }
}
