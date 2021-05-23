import { Fragment } from 'react';
import './components/FontAwesomeIcons';
import './App.scss';
import Navegacao from './components/navegacao/navegacao';
import Destaque from './components/secoes/destaque/destaque';
import ConteudoSecoes from './components/secoes/conteudo_secoes/ConteudoSecoes';
import Rodape from './components/rodape/Rodape';

function App() {
  return (
    <Fragment>
        <Navegacao/>
        <Destaque/>
        <ConteudoSecoes/>
        <Rodape/>
    </Fragment>
  );
}

export default App;
