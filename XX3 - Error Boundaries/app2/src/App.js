import React, { Suspense } from 'react';

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);

    this.state = {hasError: false };

  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if(this.state.hasError) {
      // Voce pode renderizar qualquer UI alternativoa
      return <h1>Algo deu errado.</h1>
    }

    return this.props.children;
    
  }



}

function MyWidget() {

  // Forca erro
  throw new Error('Exception message');

  return(
    <div>
      <p>Sem erros!!!</p>
    </div>
  )

}


// Error Boundary
class App extends React.Component {

  render() {

    return (

     <div>
       <ErrorBoundary>
        <MyWidget />
      </ErrorBoundary>
     </div>
    )


  }
}

export default App;
