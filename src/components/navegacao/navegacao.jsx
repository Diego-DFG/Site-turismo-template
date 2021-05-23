import { Component } from "react";

import '../secoes/componentes/_titulos.scss';
import './_navegacao.scss';

export default class Navegacao extends Component {

    acessaPacotes(event) {
        event.preventDefault();
        let body = document.querySelector('html, body');
        body.scrollTo({ top: 1250, behavior: 'smooth'});
    }

    acessaVantagens(event) {
        event.preventDefault();
        let body = document.querySelector('html, body');
        body.scrollTo({ top: 1900, behavior: 'smooth'});
    }

    acessaContato(event) {
        event.preventDefault();
        let body = document.querySelector('html, body');
        body.scrollTo({ top: 2500, behavior: 'smooth'});
    }

    render() {
        return(
            <header className="navegacao">
                <div className="navegacao__conteudo">
                    <nav className="navegacao__logo">
                        <h1 className="logo">Travelfy</h1>
                        <i className="fas fa-plane-departure"></i>
                    </nav>
                    <ul className="navegacao__lista">
                        <a onClick={this.acessaPacotes.bind(this)} className="lista__link" href="">Pacotes</a>
                        <a onClick={this.acessaVantagens.bind(this)} className="lista__link" href="">Vantagens</a>
                        <a onClick={this.acessaContato.bind(this)} className="lista__link" href="">Contato</a>
                    </ul>
                </div>
                <div className="navegacao__contato">
                    <i className="envelope fas fa-envelope"></i>
                    <p className="contato__texto">contato@travelfy.com.br</p>
                    <i className="envelope fas fa-phone"></i>
                    <p className="contato__texto contato__phone">(21) 99999-9999</p>
                </div>
            </header>
        );
    }
}