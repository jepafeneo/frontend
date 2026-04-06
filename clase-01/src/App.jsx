import "./App.css";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Subtitle from "./components/Subtitle";
import Section from "./components/Section";
import Welcome from "./components/Welcome";

function App() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Teclado" },
  ];
  const name = "Jean";

  return (
    <>
      <h1>Hola {name}</h1>
      <Welcome />
      <Title />
      <Subtitle />
      <Subtitle />

      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>

      {/* <ul>
        {products.map(item => (
          <li>{item}</li>
        ))}
      </ul> */}

      <Section />
      <Footer />
    </>
  );
}

export default App;
