import React, { Suspense } from 'react';

const Servicos = React.lazy(() =>import('./componente/Servicos') );
const Contatos = React.lazy(() =>import('./componente/Contatos') );

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


// Load Lazy
class App extends React.Component {


  render() {

    return (

     <div>
       <Suspense fallback={<div>Loading.....</div>} >
        <section>
          <Servicos />
          <Contatos />
        </section>
      </Suspense>
     </div>
    )


  }
}

// Divisão de Código Baseada em Rotas
const App2 = () => (
  <Router>
    <Suspense fallback={<div>Loading..... </div>} >
      <Switch>
        <Route exact path="/" component= {Servicos} />
        <Route path= "/about" component= {Contatos} />
      </Switch>
    </Suspense>
  </Router>
)

//export default App;
export default App2;
