import React, { Component } from 'react';

import ItemContato from './ItemContato';
import '../components/Estilo.scss';


export default class Contato extends Component {
    render() {
        return (
            <div >
                <h3>Contato</h3>
                <p>Para mais informação entre em contato</p>
                
                <ItemContato
                    
                    descricao="Endereço"
                    contato="Rua 8 de novembro, 22" />
                <ItemContato
                    
                    descricao="Telefone"
                    contato="(67) 3333-3333" />
                <ItemContato
                   
                    descricao="E-mail"
                    contato="cpw4@email.com" />
            </div>
        );
    }
}
