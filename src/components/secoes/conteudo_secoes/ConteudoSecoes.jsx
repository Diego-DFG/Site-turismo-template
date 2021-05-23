import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mockup_lead from '../../../assets/img/mockup_01_rm.png';
import turismo__00 from '../../../assets/img/turismo__00.jpeg';
import turismo__03 from '../../../assets/img/turismo__03.jpeg';
import turismo__05 from '../../../assets/img/turismo__05.jpeg';
import turismo__07 from '../../../assets/img/turismo__07.jpeg';


import '../componentes/_botoes.scss';
import '../componentes/_titulos.scss';
import './_lead.scss';
import './_pacotes.scss';
import './_viagens.scss';
import './_vantagens.scss';

export default class ConteudoSecoes extends Component {
    render() {
        return(
            <section>
                <div class="secoes__lead">
                    <div class="lead__mockup">
                        <img class="mockup__img" src={mockup_lead} alt=""/>
                    </div>
                    <div class="lead__texto">
                        <h2 class="lead__texto-paragrafo">Viaje com a Travelfy e GANHE 
                            <strong class="titulo-p2_lead lead__texto-titulo">30%</strong> de desconto na hospedagem
                        </h2>
                        <a class="lead__btn" href="">Quero desconto!</a>
                    </div>
                </div>
                <div class="secoes__pacotes">
                    <div class="pacotes__texto">
                        <p class="pacotes__texto-paragrafo">
                            <strong class="pacotes__texto-paragrafo-destaque">Planos personalizados</strong> 
                            para suas necessidades profissionais
                        </p>
                    </div>
                    <div class="pacotes__btn">
                        <a class="pacotes__btn-lead" href="">Saiba mais</a>
                    </div>
                    <div class="pacotes__descricao">
                        <p class="pacotes__texto-paragrafo">
                            Confira nosso planos pensados para você não se preocupar
                            com hospedagens e transporte durante sua jornada profissional
                        </p>
                    </div>
                </div>
                <div class="secoes__viagens">
                    <h2 class="secoes__titulo titulo__viagens">Confira nossos pacotes</h2>
                    <div class="secoes__viagens-container">
                        <div class="viagens__card card-01">
                            <img class="card__img" src={turismo__00} alt=""/>
                            <a class="card__ancora" href="#">7 noites</a>
                            <p class="card__servico">translado + hospedagem</p>
                            <p class="card__destino">Pacotes para Veneza</p>
                            <div class="card__avaliacao">
                                <p class="card__avaliacao-numero">7.5</p>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                            </div>
                            <p class="card__servico">Voe Latam</p>
                            <div class="card__preco">
                                <div class="card__preco-descricao">
                                    <p class="preco-descricao-usuario">Preço por pessoa</p>
                                    <div class="preco-valores">
                                        <p class="preco-descricao-valor"><strong>R$<span>500,00</span></strong></p>
                                        <p class="preco-descricao-valor__antigo">R$650,00</p>
                                    </div>
                                </div>
                                <p class="card__preco-desconto">-30%</p>
                            </div>
                        </div>
                        <div class="viagens__card card-02">
                            <img class="card__img" src={turismo__03} alt=""/>
                            <a class="card__ancora" href="#">7 noites</a>
                            <p class="card__servico">translado + hospedagem</p>
                            <p class="card__destino">Pacotes para os Andes</p>
                            <div class="card__avaliacao">
                                <p class="card__avaliacao-numero">7.5</p>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                            </div>
                            <p class="card__servico">Voe Latam</p>
                            <div class="card__preco">
                                <div class="card__preco-descricao">
                                    <p class="preco-descricao-usuario">Preço por pessoa</p>
                                    <div class="preco-valores">
                                        <p class="preco-descricao-valor"><strong>R$<span>500,00</span></strong></p>
                                        <p class="preco-descricao-valor__antigo">R$650,00</p>
                                    </div>
                                </div>
                                <p class="card__preco-desconto">-30%</p>
                            </div>
                        </div>
                        <div class="viagens__card card-03">
                            <img class="card__img" src={turismo__07} alt=""/>
                            <a class="card__ancora" href="#">7 noites</a>
                            <p class="card__servico">translado + hospedagem</p>
                            <p class="card__destino">Pacotes para o verão Europeu</p>
                            <div class="card__avaliacao">
                                <p class="card__avaliacao-numero">7.5</p>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                            </div>
                            <p class="card__servico">Voe Latam</p>
                            <div class="card__preco">
                                <div class="card__preco-descricao">
                                    <p class="preco-descricao-usuario">Preço por pessoa</p>
                                    <div class="preco-valores">
                                        <p class="preco-descricao-valor"><strong>R$<span>500,00</span></strong></p>
                                        <p class="preco-descricao-valor__antigo">R$650,00</p>
                                    </div>
                                </div>
                                <p class="card__preco-desconto">-30%</p>
                            </div>
                        </div>
                        <div class="viagens__card card-04">
                            <img class="card__img" src={turismo__05} alt=""/>
                            <a class="card__ancora" href="#">7 noites</a>
                            <p class="card__servico">translado + hospedagem</p>
                            <p class="card__destino">Pacotes para Serra Gaúcha</p>
                            <div class="card__avaliacao">
                                <p class="card__avaliacao-numero">7.5</p>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                                <i class="star fas fa-star"></i>
                            </div>
                            <p class="card__servico">Voe Latam</p>
                            <div class="card__preco">
                                <div class="card__preco-descricao">
                                    <p class="preco-descricao-usuario">Preço por pessoa</p>
                                    <div class="preco-valores">
                                        <p class="preco-descricao-valor"><strong>R$<span>500,00</span></strong></p>
                                        <p class="preco-descricao-valor__antigo">R$650,00</p>
                                    </div>
                                </div>
                                <p class="card__preco-desconto">-30%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="secoes__vantagens">
                    <h1 class="secoes__titulo titulo__vantagens">Nossas garantias para sua viagem</h1>
                    <p class="vantagens__titulo-paragrafo">
                        Temos o compromisso é sempre lhe garantir a melhor experiência em nossos serviços
                    </p>
                    <div class="vantagens__cards">
                        <div class="vantagens__cards-container vantagens__card-01">
                            <FontAwesomeIcon className="shield" icon="user-shield" />
                            <h2 class="vantagens__cards-titulo">Cuidamos da sua segurança</h2>
                            <p class="vantagens__paragrafo-cards">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nam efficitur interdum finibus. Vivamus ipsum mauris, mollis 
                                id efficitur non, malesuada at enim. Nam dui nibh, sodales eu 
                                elit eu, finibus tristique purus.
                            </p>
                            <a class="vantagens__cards-botao" href="">Saiba mais</a>
                        </div>
                        <div class="vantagens__cards-container vantagens__card-01">
                            <FontAwesomeIcon className="wallet" icon="wallet" />
                            <h2 class="vantagens__cards-titulo">Verificamos seus pagamentos</h2>
                            <p class="vantagens__paragrafo-cards">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nam efficitur interdum finibus. Vivamus ipsum mauris, mollis 
                                id efficitur non, malesuada at enim. Nam dui nibh, sodales eu 
                                elit eu, finibus tristique purus.
                            </p>
                            <a class="vantagens__cards-botao" href="">Saiba mais</a>
                        </div>
                        <div class="vantagens__cards-container vantagens__card-01">
                            <FontAwesomeIcon className="cog" icon="cog" />
                            <h2 class="vantagens__cards-titulo">Garantimos a prestação dos serviços</h2>
                            <p class="vantagens__paragrafo-cards">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nam efficitur interdum finibus. Vivamus ipsum mauris, mollis 
                                id efficitur non, malesuada at enim. Nam dui nibh, sodales eu 
                                elit eu, finibus tristique purus.
                            </p>
                            <a class="vantagens__cards-botao" href="">Saiba mais</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}