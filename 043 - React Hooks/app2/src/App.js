import React, {useState} from 'react';

const App = () => {

  const[Nome, setNome] = useState("João");

  return(
    <div>
      <p>O meu nome é: {Nome}</p>
      <button onClick={() => setNome("Joaquim")}>Alterar</button>
    </div>
  )


}

export default App;
