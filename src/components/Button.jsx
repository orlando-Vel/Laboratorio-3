//
// Componente sin uso real ahora mismo dado que solo tengo un boton el formulario.
// si en algun momento se necesita mas botones se podra usar este componente
// para crearlos aunque todos serian igual.
// actualmente no se usa y estoy considerando borrar el componente.
//
import React from "react";
const Button = () => {
  return (
    <button className="transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none bg-black hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      Boton
    </button>
  );
};

export default Button;
