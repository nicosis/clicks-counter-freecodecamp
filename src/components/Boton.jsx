import React from "react";
import '../styles/Boton.css'

const Boton = ({ texto, esBotonDeclick, handleClick }) => {
  return (
    <div>
      <button className={esBotonDeclick ? "boton-click" : "boton-reiniciar"} onClick={handleClick} >
        {texto}
      </button>
    </div>
  );
};

export default Boton;
