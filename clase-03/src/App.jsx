import "./App.css";
import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
    { id: 2, name: "Mouse", price: 50, category: "Accessories" },
    { id: 3, name: "Keyboard", price: 80, category: "Electronics" },
    { id: 4, name: "Monitor", price: 300, category: "Monitors" },
  ]);

  // const products = [
  //   { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  //   { id: 2, name: "Mouse", price: 50, category: "Accessories" },
  //   { id: 3, name: "Keyboard", price: 80, category: "Electronics" },
  //   { id: 4, name: "Monitor", price: 300, category: "Monitors" },
  // ];

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: "Monitor LG",
      price: 350,
      category: "Monitors",
    };

    console.log(newProduct);

    // products.push(newProduct);
    setProducts([...products, newProduct]);

    console.log(products);
  };

  const categories = [
    { id: 1, name: "Tecnología" },
    { id: 2, name: "Audio" },
    { id: 3, name: "Accesorios" },
  ];

  return (
    <>
      <Title title="Listado de productos" />

      <ProductList products={products} />

      <button onClick={addProduct}>Agregar producto</button>

      <Subtitle title="Listado de categorías" />

      <h3 className="ticks">Algo</h3>

      <CategoryList categories={categories} />

      <Footer company="Una empresa" />
    </>
  );
}

export default App;
