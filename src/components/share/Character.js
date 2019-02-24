import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Character extends Component {
  constructor(props) {
    super(props);
    this.onClickHandle = this.onClickHandle.bind(this);
  }

  onClickHandle(e) {
    console.log(e.target.value);
    this.props.onSelect(e.target.value);
  }

  render() {
    return (
      <div className="card" style={{ width: "18rem", marginBottom: '4%' }}>
        <img src={this.props.src} className="card-img-top" alt={this.props.name}/>
        <div className="card-body">
          <h5>{this.props.name}</h5>
          <Link style={buttonLink}
            to={{
              pathname: `/character/${this.props.pkCharacter}`
            }}
          >
            Detail
          </Link>
        </div>
      </div>
    );
  }
}

const buttonLink = {
    color: 'rgb(255, 255, 255)',
    border: '1px solid',
    borderRadius: '12',
    padding: '4%',
    paddingRight: '8%',
    paddingLeft: '8%',
    background: 'rgb(138, 43, 226)'
}

