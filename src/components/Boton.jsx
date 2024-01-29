import React from "react";

function Boton({ texto, esBotonDeClic }) {
  return (
    <button className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}>
      {texto}
    </button>
  );
}

export default Boton;
