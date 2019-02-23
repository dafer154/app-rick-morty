import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Character extends Component {
    

    onClickHandle = (e) =>{
        console.log(e.target.value);
        this.props.onSelect(e.target.value);
    }
    
    
    render() {
        return (
            <div className="card" style={{width: '18rem'}}>
                <img src={this.props.src} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <Button variant="primary" value={this.props.pkCharacter} onClick={this.onClickHandle}>Primary</Button>
                    </div>
            </div>
                ) 
        }
}