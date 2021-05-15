import React, { Suspense } from 'react';


// Context nos permite passar um valor a fundo da árvore de componente
// sem explicitamente passa-la por cada componente.
// Crie um Context para o tema atual (com "light" como padrão).
const ThemeContext = React.createContext('light');

// Load Lazy
class App extends React.Component {


  render() {

    return (

       <ThemeContext.Provider value="dark">
         <Toolbar />
       </ThemeContext.Provider> 
    
    )


  }
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

class ThemeButton extends React.Component {

  static contextType = ThemeContext;

  render() {
    return <button theme={this.context} >Button</button>
  }


}

export default App;





