import { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './_destaque.scss';

export default class Destaque extends Component {

    _desceTela() {
        let body = document.querySelector('html, body');
        body.scrollTo({top: 600, behavior: 'smooth'});
    }

    render() {
        return(
            <section class="conteudo__destaque">
                <div class="destaque__titulo">
                    <h1 class="titulo-p1">Viva experiências inesquecíveis viajando conosco!</h1>
                    <h1 class="titulo-p2">Com a Travelfy você explora o mundo com <strong class="titulo-p2_lead">20%</strong> de desconto na primeira viagem.</h1>
                </div>
                <FontAwesomeIcon onClick={this._desceTela.bind(this)} className="destaque__saiba-mais" icon="chevron-down" />
            </section>
        );
    }
}