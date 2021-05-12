import React from 'react';

import Navegacao from './componente/Navegacao';
import Home from './componente/Home';
import Servicos from './componente/Servicos';
import Contatos from './componente/Contatos';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component {


  render() {

    return (

      <Router>

        <div>
          
          <Navegacao />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/servicos">
              <Servicos />
            </Route>
          
            <Route path="/contactos">
              <Contatos />
            </Route>

          </Switch>
          
        </div>

      </Router>
    )


  }


}

export default App;
