import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");

  return (
    <section>
      <h2>Nuevo Producto</h2>
      <form>
        <div>
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      </form>

      <p>{name}</p>
    </section>
  );
}

export default ProductForm;
