import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <h1>Clase 06</h1>

      <section>
        <h2>Productos</h2>
        <p>Cantidad: {products.length}</p>
      </section>
    </>
  );
}

export default App;
