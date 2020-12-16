import './App.css';
import React, {Component} from 'react';
import ContadorClick from './ContadorClick';
import ContadorTexto from './ContadorTexto';

class App extends Component {

  render(){    
    return (
      <div id="principal">
        <div id='principal_conteudo'>
         
            <ContadorTexto />
            <ContadorClick />

          </div>	
        </div>
    )
  }

}

export default App;
