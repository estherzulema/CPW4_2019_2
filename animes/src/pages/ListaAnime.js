import React, { Component } from 'react';

import Menu from '../../src/components/menu/Menu';
import volta from '../../src/img/paginaAnterior.jpg';

import ListaService from '../../src/services/ListaServices';
import Axios from 'axios';

import './AnimEstilo.scss';
export default class ListaAnime extends Component {

    constructor(props){
        super(props);
    
        this.state= {
            animes: [],
            anime: this.props.location.state.anime.nome 
        };
        this.service = new ListaService();
      }
    
     async componentDidMount(){
        let URL = 'https://api.jikan.moe/v3/search/anime?q=' + this.state.anime; 
        Axios.get(URL)
       .then(res => {
           const animes = res.data.results;
           console.log(animes)
           this.setState({animes});
        })
        .catch(ex => {
            console.log('Falha', ex)
        });
    }
    
    render() {
                    
        return (
            <div>
                <Menu paginaAnterior="/" titulo="Animes" logo={volta}/>            
                
                {this.state.animes.map(anime => (
                    <div className="card">
                             <img className="imagem" src={anime.image_url}/>

                             <div className="card_central">
                                <h4 className="card_titulo" >{anime.title} </h4>
                                <p className="card_Text">{anime.synopsis}</p>
                             </div>
                        </div>       
                ))}

            </div>
             
           
        );
    }
}