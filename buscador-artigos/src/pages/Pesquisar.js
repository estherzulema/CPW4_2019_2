
import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

import logo from '../img/logo.png';

import Header from '../components/Header';
import ArtigoService from '../services/ArtigoService';
import './Pesquisar.scss';

export default class Pesquisar extends Component {

    constructor() {
        super();

        this.state = {
            pesquisa: [],
            carregando: false,
            textoPesquisa: ''
        }

        this.service = new ArtigoService();
    }

    pesquisar = event => {
        const consulta = event.target.value;
        /**
         * Seta para "true" a flag "carregando",
         * sinalizando que a animação de loading
         * deve ser exibida
         */
        this.setState({
            carregando: true,
            textoPesquisa: consulta,
            pesquisa: []
        });

        this.service
            .pesquisar(consulta)
            .then(resposta => this.setState({
                pesquisa: resposta.data,
                carregando: false
            }))
            .catch(erro => {
                console.log(erro);
                this.setState({ carregando: false });
            });
    }

    render() {
        const { pesquisa, textoPesquisa } = this.state;
        console.log(pesquisa);


        const listaPesquisa = pesquisa.map(pesquisas => {
            
            

            return (
                <div key={pesquisas.show.id} className="serie">
                    <Link to={
                        {
                            pathname: '/serie',
                            state: { pesquisas }
                        }
                    }>
                        <img
                            
                            alt="Cartaz da série" />
                    </Link>

                    <Link to={
                        {
                            pathname: '/serie',
                            state: { pesquisas }
                        }
                    }>
                        <span>{pesquisas.show.name}</span>
                    </Link>
                </div>
            )
        });

        const naoTemResultadoParaExibir =
            listaPesquisa.length === 0;
        const usuarioEstaPesquisando =
            textoPesquisa.length > 0;

        return (
            <div>
                <Header
                    enderecoPaginaAnterior="/"
                    logo={logo}
                    titulo="Pesquisador de Artigos"
                    />

                <div id="areaPesquisa">
                    <input
                        value={this.state.textoPesquisa}
                        id="campoPesquisa"
                        onChange={this.pesquisar}
                        placeholder="search"
                        type="text" />
                </div>

                {
                    this.state.carregando &&
                    <div id="areaLoading">
                        <ReactLoading
                            id="animacao"
                            type="bars"
                            color="#f734c6"
                            height="60px"
                            width="60px" />
                    </div>
                }

                <div id="areaResultados">
                    {
                        (naoTemResultadoParaExibir
                            && usuarioEstaPesquisando) &&
                        <span id="mensagemNaoEncontrado">Nenhuma artigo encontrado</span>
                    }
                    {listaPesquisa}
                </div>

            </div>
        )
    }
}
