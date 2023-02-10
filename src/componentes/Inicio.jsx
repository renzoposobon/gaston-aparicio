import React from 'react'

const Inicio = () => {

  return (
    <div>
      <main className='mainInicio'>
        <img src={require("../recursos/foto-sin-fondo-con-alta-calidad-recortada.png")} alt="foto-gaston" className='imagenInicio' />
        {/* <p className='slogan'>#ElijoCreer ⭐⭐⭐</p> */}
        {/* <img src={require("../recursos/DSC00434.png")} alt="foto-gaston" className='imagenInicio' /> */}
        <article className='cuerpoTextoInicio'>
          <p className='tituloUno'>¡Hola!</p>
          <p className="tituloInicio">Soy Gastón Aparicio</p>
          <p className='tituloAbajo'>Quiero darte la bienvenida a mi sitio web <i className='icono-peronista'>✌</i></p>
        </article>
      </main>
    </div>
  )
}

export default Inicio