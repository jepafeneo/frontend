import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.price || !form.stock) return;

    const newProduct = {
      _id: crypto.randomUUID(),
      name: form.name,
      price: form.price,
      stock: form.stock,
    };

    onAddProduct(newProduct);

    setForm({
      name: "",
      price: "",
      stock: "",
    });

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
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio: </label>
          <input
            type="number"
            id="price"
            value={form.price}
            min="0"
            onChange={(event) =>
              setForm({ ...form, price: event.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock: </label>
          <input
            type="number"
            id="stock"
            value={form.stock}
            min="0"
            onChange={(event) =>
              setForm({ ...form, stock: event.target.value })
            }
          ></input>
        </div>

        <div className="form-actions">
          <button type="submit">Guardar producto</button>
        </div>
      </form>
    </section>
  );
}

export default ProductForm;
