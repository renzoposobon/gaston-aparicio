import React from 'react'
import wave from "../recursos/wave.svg"

const Inicio = () => {

  return (
    <div>
      <main className='mainInicio'>
        <img src={require("../recursos/foto-sin-fondo-con-alta-calidad-recortada.png")} alt="foto-gaston" className='imagenInicio' />
        {/* <p className='slogan'>#ElijoCreer ⭐⭐⭐</p> */}
        {/* <img src={require("../recursos/DSC00434.png")} alt="foto-gaston" className='imagenInicio' /> */}
        {/* <img src={wave} alt="" className='wave' /> */}
        <article className='cuerpoTextoInicio'>
          <img src={wave} alt="" className='wave' />
          <div>
            <p className='tituloUno'>¡Hola!</p>
            <p className="tituloInicio">Soy Gastón Aparicio</p>
            <p className='tituloAbajo'>Quiero darte la bienvenida a mi sitio web <i className='icono-peronista'>✌</i></p>
          </div>
        </article>
      </main>
    </div>
  )
}

export default Inicio