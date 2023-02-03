import React, { useState } from "react";

const WhatsappModal = () => {
  const [showChat, setShowChat] = useState(false);
  const [momentoActual, setMomentoActual] = useState(new Date());

  const handleOpenClose = () => {
    setShowChat(!showChat);
    setMomentoActual(new Date());
  };

  let whatsappOpenClose = document.getElementById('wahtsapp_pop');
  let whatsappChat = document.querySelector('.wahtsapp_chat_container');
  let chat_1 = document.getElementById('chat_1');
  let chat_2 = document.getElementById('chat_2');
  let chat_dots = document.getElementById('chat_dots');
  let chat_hs = document.querySelectorAll('.chat_hs');

  whatsappChat.classList.toggle('show');

  let minutosActual = momentoActual.getMinutes() < 10 ? 
  0 + momentoActual.getMinutes() : momentoActual.getMinutes();

  for( let hs of chat_hs){
      hs.innerText = momentoActual.getHours() + ":" + minutosActual
  };

  setTimeout(() => {
    chat_dots.classList.add('hidden');
    chat_1.classList.add('visible');
  },4000);

  setTimeout(() => {
    chat_2.classList.add('visible');
  },6000);
  

  return (
    <div className="wahtsapp_container">
      <div
        id="wahtsapp_pop"
        className="wahtsapp_pop"
        onClick={handleOpenClose}
      >
        <div className="wahtsapp_pop_icono">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="fab fa-whatsapp icono-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </div>
        <div className="pulso"></div>
      </div>
      <div
        className={`wahtsapp_chat_container ${showChat ? "show" : ""}`}
      >
        {showChat && (
          <>
          <div className="wahtsapp_chat_title">
            <div className="title_img">
              <img src={require('../recursos/avatar.jpg')} alt="Avatar" className="rounded-full" />
            </div>
            <div className="title_text">
              <h2 className="title_text_name">Gastón Aparicio</h2>
              <p className="title_text_subname">Candidato a Intendente</p>
            </div>
          </div>
            <div className="wahtsapp_chat">
              <div id="chat_1" className="chat_container">
                <strong className="chat_title">Gastón Aparicio</strong>
                <p className="chat_txt">Hola, ¿Cómo estas? 👋</p>
                <span className="chat_hs">11:24</span>
            </div>
            <div id="chat_2" className="chat_container">
                <p className="chat_txt">¿En qué te puedo ayudar?</p>
                <span className="chat_hs">11:24</span>
            </div>
            <div id="chat_dots" className="chat_container">
              <div className="chat_dots_container">
                <span className="chat_dots"></span>
                <span className="chat_dots"></span>
                <span className="chat_dots"></span>
              </div>
            </div>
          </div>
          <div className="wahtsapp_send">
            <a href="https://api.whatsapp.com/send?phone=5492615433156&text=Hola%21%20Como%20estas?%20" className="wahtsapp_send_enlace" target="_blank"><ion-icon className="wahtsapp_send_icono" name="logo-whatsapp"></ion-icon><strong className="wahtsapp_send_txt" >Iniciar Chat</strong></a>
          </div>
        </>
        )}
      </div>
    </div>
  );
};

export default WhatsappModal;