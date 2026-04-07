import "./App.css";

function App() {
  const name = "Juan";
  const products = ["Mouse", "Laptop"];

  return (
    <>
      <h1>Hola {name}</h1>
      
      <ul>
        {products.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
