import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className = "navbar navbar-dark bg-dark">
        <div className='d-felx'>
        <Link className='btn btn-dark' to= '/ '>Inicio</Link>
        <Link className='btn btn-dark' to= '/crear'>Crear Usuario</Link>
        </div>

    </div>
  )
}

export default Navbar