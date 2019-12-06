

import axios from 'axios';

export default class ArtigoService {

    constructor() {
        this.service = axios.create({
            baseURL: 'https://pt.wikipedia.org/w/api.php?action=opensearch&search'
        });
    }

    pesquisar(pesquisa) {
        const consulta = `/shows?q=${pesquisa}`;
        // Retorna a Promise (promessa)
        return this.service.get(consulta);
    }
}
//'https://pt.wikipedia.org/w/api.php?action=opensearch&search'