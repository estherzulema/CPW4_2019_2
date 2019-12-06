import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Pesquisar from './pages/Pesquisar';
import VisualizarArtigo from './pages/VisualizarArtigo';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route
                exact
                path="/"
                component={Pesquisar} />
            <Route
                exact
                path="/serie"
                component={VisualizarArtigo} />
        </Switch>
    </BrowserRouter>
);

export default Rotas;