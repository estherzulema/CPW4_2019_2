import React, { Component } from 'react';

import ItemContato from './ItemContato';
import './Estilo.scss';


export default class Contato extends Component {
    render() {
        return (
            <div >
                <h3>Contato</h3>
                <h5>Para mais informação entre em contato</h5>
                
                <h4><ItemContato
                    
                    descricao="Endereço"
                    contato="Rua 1234, 11" />
                <ItemContato
                    
                    descricao="Telefone"
                    contato="(67) 3333-3333" />
                <ItemContato
                   
                    descricao="E-mail"
                    contato="cpw4@email.com" />
                    </h4>
            </div>
        );
    }
}
