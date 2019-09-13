import React, { Component } from 'react';
import './Menu.scss';
import './ItemContato';

export default class ItemContato extends Component {
    render() {
        return (
            <div className="itemContato">
                
                <span id="descricao">{this.props.descricao}</span>
                :
                <span id="contato">{this.props.contato}</span>
            </div>
        );
    }
}
