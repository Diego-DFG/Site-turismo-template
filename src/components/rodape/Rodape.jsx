import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../secoes/componentes/_titulos.scss';
import './_rodape.scss';
import '../navegacao/_navegacao.scss';

export default class Rodape extends Component {
    render() {
        return(
            <footer className="rodape">
                <div className="rodape__container">
                    <div>
                        <ul className="lista__travelfy">
                            <h2 className="lista__travelfy-titulo">Sobre a Travelfy</h2>
                            <li><a className="lista__atendimento-link" href="">Termos e condições</a></li>
                            <li><a className="lista__atendimento-link" href="">Política e privacidade</a></li>
                            <li><a className="lista__atendimento-link" href="">Fale conosco</a></li>
                            <li><a className="lista__atendimento-link" href="">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="rodape__pagamento">
                        <h2 className="rodape__pagamento-titulo">Formas de pagamento:</h2>
                        <ul className="pagamento__creditCard">
                            <li><FontAwesomeIcon className="creditCard" icon={['fab', 'cc-visa']} size={'2x'} /></li>
                            <li><FontAwesomeIcon className="creditCard" icon={['fab', 'cc-mastercard']} size={'2x'}/></li>
                            <li><FontAwesomeIcon className="creditCard" icon={['fab', 'cc-paypal']} size={'2x'}/></li>
                            <li><FontAwesomeIcon className="creditCard" icon={['fab', 'amazon-pay']} size={'2x'}/></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="lista__televendas">
                            <h2 className="televendas__titulo">Televendas</h2>
                            <li><a className="lista__televendas-link" href="">Segunda à sexta - 08h às 22h.</a></li>
                            <li><a className="lista__televendas-link" href="">Sábado - 09h às 21h.</a></li>
                            <li><a className="lista__televendas-link" href="">Domingo e feriados - 09h às 21h</a></li>
                            <li><a className="lista__televendas-link" href="">vendas@travefy.com.br</a></li>
                        </ul>
                    </div>
                </div>
                <div className="rodape__base">
                    <div className="rodape__logo">
                        <h1 className="rodape__logo-titulo">Travelfy</h1>
                        <i className="fas fa-plane-departure"></i>
                    </div>
                    <div className="rodape__copyright">
                        <span>2021&copy; - Travelfy viagens - Powered by DFG Solutions - <a className="copyright__link" href="http://www.dfgsolutions.com.br">www.dfgsolutions.com.br</a></span>
                    </div>
                </div>
            </footer>
        );
    }
}