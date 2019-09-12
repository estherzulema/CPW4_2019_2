import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.scss';
import Menu from './components/Menu';
import Home from './components/Home';
import Bio from './components/Bio';
import Contato from './components/Contato';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />

        <div className="conteudo">
          <Switch>
          <Route path="/home" component={Home} />
            <Route path="/bio" component={Bio} />
            <Route path="/contato" component={Contato} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
