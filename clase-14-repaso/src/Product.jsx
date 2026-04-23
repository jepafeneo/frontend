import { useState } from "react";

function Product() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    stock: "",
  });

  const handleChange = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // const handleChangeName = (event) => {
  //   setForm({
  //     name: event.target.value,
  //     price: form.price,
  //     stock: form.stock,
  //   });
  // };

  // const handleChangePrice = (event) => {
  //   setForm({
  //     name: form.name,
  //     price: event.target.value,
  //     stock: form.stock,
  //   });
  // };

  // const handleChangeStock = (event) => {
  //   setForm({
  //     name: form.name,
  //     price: form.price,
  //     stock: event.target.value,
  //   });
  // };

  return (
    <>
      <h1>Producto</h1>

      <form>
        <div>
          <label htmlFor="title">Titulo: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={form.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            name="price"
            id="price"
            value={form.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            name="stock"
            id="stock"
            value={form.stock}
            onChange={handleChange}
          />
        </div>

        <div>
          <p>{form.title}</p>
          <p>{form.price}</p>
          <p>{form.stock}</p>
        </div>
      </form>
    </>
  );
}

export default Product;
