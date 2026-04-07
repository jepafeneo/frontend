import "./App.css";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Title from "./components/Title";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
    { id: 2, name: "Mouse", price: 50, category: "Accessories" },
    { id: 3, name: "Keyboard", price: 80, category: "Electronics" },
    { id: 4, name: "Monitor", price: 300, category: "Monitors" },
  ];

  const categories = [
    { id: 1, name: "Tecnología" },
    { id: 2, name: "Audio" },
    { id: 3, name: "Accesorios" },
  ];

  return (
    <>
      <Title title="Novedades" />

      <ProductList products={products} />

      <h2>Categorías</h2>

      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

      <Footer company="Una empresa" />
    </>
  );
}

export default App;
