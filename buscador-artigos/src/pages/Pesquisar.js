import React, { Component } from 'react';

import './Pesquisar.scss';



export default class Pesquisar extends Component {

    constructor() {
        super();
        this.state = {
            valoresRetornados: [],
            termosPesquisa: ''
        }
    }

    pesquisa = event => {
        event.preventDefault();

        //Valores de retorno de pesquisa da wiki

        this.setState({
            valoresRetornados: []
        });

        const ponteiro = this;
        //url https://pt.wikipedia.org/w/api.php?action=opensearch&search=

        var url = "https://pt.wikipedia.org/w/api.php";

        var param = {
            action: 'query',
            list: 'search',
            srsearch: this.state.termosPesquisa,
            format: 'json'
        };

        url = url + '?origin=*';
        Object.keys(param).forEach((key) => {
            url += "&" + key + "=" + param[key];
        });

        fetch(url)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (resposta) {

                    for (var key in resposta.query.search) {
                        ponteiro.state.valoresRetornados.push({

                            pagResultID: resposta.query.search[key].pageid,
                            pagResultTitulo: resposta.query.search[key].title,
                            pagResultTrecho: resposta.query.search[key].snippet
                        });
                    }
                }
            )
            .then(
                function (resposta) {
                    for (var key2 in ponteiro.state.valoresRetornados) {
                        // console.log(ponteiro.state.valoresRetornados);

                        let page = ponteiro.state.valoresRetornados[key2];

                        let pageID = page.pagResultID;

                        //URL Para recuperar o URL da página por ID da página
                        //url https://pt.wikipedia.org/w/api.php?action=opensearch&search=

                        let recuperarUrl = `https://pt.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

                        fetch(recuperarUrl)
                            .then(
                                function (resposta) {
                                    return resposta.json();
                                }
                            )
                            .then(
                                function (resposta) {

                                    //URL completo da página de resultados da consulta
                                    
                                    page.urlResultConsulta =
                                        resposta.query.pages[pageID].fullurl;

                                    ponteiro.forceUpdate();
                                }
                            )
                    }
                }
            )
    }

    aterarTermPesq = event => {
        this.setState({
            termosPesquisa: event.target.value
        });
    }

    render() {
        let pesquisaResults = [];

        // console.log(this.state.valoresRetornados);

        for (var key3 in this.state.valoresRetornados) {
            pesquisaResults.push(

                <div className="resultado" key={key3}>


                    <h3>
                        <a href={this.state.valoresRetornados[key3].urlResultConsulta}>
                            {this.state.valoresRetornados[key3].pagResultTitulo}
                        </a>
                    </h3>



                    <span className='link'>
                        <a href={this.state.valoresRetornados[key3].urlResultConsulta}>
                            {this.state.valoresRetornados[key3].urlResultConsulta}
                        </a>
                    </span>

                    <p className="descricao" dangerouslySetInnerHTML=
                        {{ __html: this.state.valoresRetornados[key3].pagResultTrecho }}></p>

                </div>
            );
        }

        console.log(pesquisaResults);

        return (

            <div className="inicio">
                <h1>Buscador de artigos</h1>
                <form action="">
                    <input type="text" value={this.state.termosPesquisa || ''} onChange={this.aterarTermPesq} placeholder='' />
                    <button type='submit' onClick={this.pesquisa}>Search</button>
                </form>


                {pesquisaResults}

            </div>
        );
    }
}