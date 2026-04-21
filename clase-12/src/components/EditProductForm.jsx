import { useState } from "react";

function EditProductForm() {
  const initialState = {
    name: "",
    price: "",
    stock: "",
  };

  const [form, setForm] = useState(initialState);

  return (
    <section>
      <h2>Editar producto</h2>

      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre: </label>
          <input type="text" id="name" name="name" value={form.name} />
        </div>
      </form>
    </section>
  );
}

export default EditProductForm;
