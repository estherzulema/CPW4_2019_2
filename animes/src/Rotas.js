import React  from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicio from './pages/Inicio';
import ListaAnime from './pages/ListaAnime';


import ROTAS from './constants/rotas';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={ROTAS.INICIO} component ={Inicio}/>
            <Route exact path={ROTAS.LISTAANIME} component ={ListaAnime}/>
         </Switch>
    </BrowserRouter>
);
export default Rotas;