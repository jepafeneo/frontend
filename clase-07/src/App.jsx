import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    fetch("http://localhost:3000/products")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener lo productos");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        // console.log(data, products);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // const nombres = ['Juan', 'María']
  // ['<h2>Juan</h2>', '<h2>María</h2>']

  // ['<div>
  //   <h3>Nombre</h3>
  //   <p>Precio</p>
  //   </div>']

  return (
    <>
      <h1>Clase 07</h1>

      <section>
        <h2>Products</h2>

        <div>
          {products.map((product) => (
            <article key={product._id}>
              <h3>{product.name}</h3>
              <p>$ {product.price}</p>
            </article>
          ))}
        </div>

        <p>Cantidad: {products.length}</p>
      </section>
    </>
  );
}

export default App;
