import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleChangeNombre = (event) => setNombre(event.target.value);
  const handleChangeCorreo = (event) => setCorreo(event.target.value);
  const handleChangeMensaje = (event) => setMensaje(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const consulta = {
      nombre,
      correo: correo,
      mensaje: mensaje,
    };

    console.log(consulta);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Enviar 1</button>

        {/* <button type="button" onClick={() => console.log("clic")}>
          Enviar 2
        </button> */}
      </form>
    </>
  );
}

export default App;
