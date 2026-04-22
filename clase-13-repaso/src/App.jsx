import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleChangeNombre = (event) => setNombre(event.target.value);
  const handleChangeCorreo = (event) => setCorreo(event.target.value);
  const handleChangeMensaje = (event) => setMensaje(event.target.value);

  return (
    <>
      <input
        type="text"
        name="nombre"
        id="nombre"
        placeholder="Escriba su nombre"
        value={nombre}
        onChange={handleChangeNombre}
      />
      <p>{nombre}</p>

      <input
        type="correo"
        id="correo"
        placeholder="Escribe tu correo"
        value={correo}
        onChange={handleChangeCorreo}
      />
      <p> {correo} </p>

      <textarea
        type="text"
        name="mensaje"
        id="mensaje"
        placeholder="Mensaje"
        value={mensaje}
        onChange={handleChangeMensaje}
      />
      <p>{mensaje}</p>
    </>
  );
}

export default App;
