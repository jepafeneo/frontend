import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyword" },
    { id: 4, name: "Monitor" },
  ];

  return (
    <>
      <h1>Listado de productos</h1>

      <ProductList products={products} />
    </>
  );
}

export default App;
