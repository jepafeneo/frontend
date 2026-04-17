import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ProductForm({ products }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(!name, name == "", !price, !stock); // !false - !"", !0, !null, !undefined

    // if (name == "" || price == "" || stock == "") return;
    if (!name || !price || !stock) return;

    const newProduct = {
      _id: crypto.randomUUID(),
      name,
      price,
      stock,
    };

    // console.log(newProduct);
    products.push(newProduct);

    setName("");
    setPrice("");
    setStock("");

    navigate("/");
  };

  return (
    <section>
      <h2>Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio: </label>
          <input
            type="number"
            id="price"
            value={price}
            min="0"
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock: </label>
          <input
            type="number"
            id="stock"
            value={stock}
            min="0"
            onChange={(event) => setStock(event.target.value)}
          ></input>
        </div>

        <div className="form-actions">
          <button type="submit">Guardar producto</button>
        </div>
      </form>

      <p>{name}</p>
      <p>{price}</p>
      <p>{stock}</p>
    </section>
  );
}

export default ProductForm;
