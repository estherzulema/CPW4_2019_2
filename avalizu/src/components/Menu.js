import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

export default class  Menu extends Component {
    render() {
        return (
            <div className="banner">
                
                <div id="menu">
                <h3>
                  
                
                <Link to="/bio"  >Esther Lubas</Link>
                    </h3>

                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/bio">Bio</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </div>
            </div>
        );
    }
}
