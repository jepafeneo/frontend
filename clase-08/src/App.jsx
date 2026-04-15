import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

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
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <h1>Clase 07</h1>

      <section>
        <h2>Products</h2>

        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              stock={product.stock}
              price={product.price}
            />
          ))}
        </div>

        <p>Cantidad: {products.length}</p>
      </section>
    </>
  );
}

export default App;
