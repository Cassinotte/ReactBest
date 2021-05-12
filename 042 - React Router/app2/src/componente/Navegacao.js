import React from 'react'
import { Link } from 'react-router-dom'

const Navegacao = () => {
    return (
        <div>
          <Link to="/" replace >Home</Link>
          <Link to="/servicos" replace >Servicos</Link>
          <Link to="/contactos" replace >Contactos</Link>
        </div>
    )
}


export default Navegacao;