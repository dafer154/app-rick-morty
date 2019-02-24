import React, { Component } from "react";
import axios from "axios";

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
            <div>
                <div className="row" style={{ marginTop: "9%" }}>
                    <div className="col-sm-4">
                        <img className="img-fluid" src={this.state.character.image} alt={this.state.character.name}/>
                        <div>
                            <label>Genero: </label>
                            <span>{this.state.character.gender}</span>
                        </div>
                        <div>
                            <label>Especie : </label>
                            <span>{this.state.character.species}</span>
                        </div>
                    </div>

                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-10">
                                <h2>{this.state.character.name}</h2>
                            </div>
                            <div className="col-sm-2">
                                <h3 style={{ textAlign: "right" }}>
                                    <i className="fa fa-star" aria-hidden="true" />
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailCharacter;
