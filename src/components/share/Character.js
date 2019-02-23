import React, { Component } from 'react';





export class Character extends Component {
    render() {
        return (
            <div class="card" style={{width: '18rem'}}>
                <img src={this.props.src} class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.name}</h5>
                        <a class="btn btn-primary">Detail</a>
                    </div>
            </div>
                ) 
        }
}