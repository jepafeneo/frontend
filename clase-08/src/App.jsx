import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = () => {
    fetch("http://localhost:3001/products")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener lo productos");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return <h1>Cargando productos...</h1>;
  }

  if (error) {
    // return <p style={{ color: "red" }}>{error}</p>;
    return <p className="error">{error}</p>;
  }

  return (
    <>
      <h1>Clase 08</h1>

      {/* {loading && <p>Cargando productos...</p>} */}
      {/* {loading ? <p>Cargando productos...</p> : null} */}

      {/* {error && <p>{error}</p>} */}

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
