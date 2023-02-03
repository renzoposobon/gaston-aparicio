import React from 'react'

const Inicio = () => {

  const tituloUno = {
    "font-size": "54px"
  }

  return (
    <div>
      <main className='mainInicio'>
        <img src={require("../recursos/foto-index-min-removebg-preview2.png")} alt="foto-gaston" className='imagenInicio' />
        <article className='cuerpoTextoInicio'>
          <p style={tituloUno}>¡Hola!</p>
          <p className="tituloInicio">Soy Gastón Aparicio</p>
          <p className='tituloAbajo'>Y quiero darte la bienvenida a mi sitio web</p>
        </article>
      </main>
    </div>
  )
}

export default Inicio