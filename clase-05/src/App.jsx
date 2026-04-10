import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const fakeProducts = [
    { id: 1, name: "Producto 1" },
    { id: 2, name: "Producto 2" },
    { id: 3, name: "Producto 3" },
  ];

  const fakeJuegos = [
    { id: 1, name: "Super Mario 64", año: 1996 },
    { id: 2, name: "The Legend of Zelda: Ocarina of Time", año: 1998 },
    { id: 3, name: "Final Fantasy VII", año: 1997 },
    { id: 4, name: "Metal Gear Solid", año: 1998 },
    { id: 5, name: "Half-Life", año: 1998 },
  ];

  const fakePeliculas = [
    {
      id: 1,
      titulo: "El Padrino",
      director: "Francis Ford Coppola",
      año: 1972,
    },
    {
      id: 2,
      titulo: "El Caballero Oscuro",
      director: "Christopher Nolan",
      año: 2008,
    },
    { id: 3, titulo: "Pulp Fiction", director: "Quentin Tarantino", año: 1994 },
  ];

  const [products, setProducts] = useState([]);
  const [juegos, setJuegos] = useState([]);
  const [peliculas, setPeliculas] = useState([]);
  // const [coches, setCoches] = useState([]);

  useEffect(() => {
    console.log("El componente ya se renderizó");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setProducts(fakeProducts);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setJuegos(fakeJuegos);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPeliculas(fakePeliculas);
    }, 1000);
  }, []);

  return (
    <>
      <h1>Clase 05</h1>

      <section>
        <h2>Productos</h2>
        <p>Total: {products.length}</p>
        {products.map((product) => (
          <p key={`product-${product.id}`}>{product.name}</p>
        ))}
      </section>

      <section>
        <h2>Juegos</h2>
        <p>Total: {juegos.length}</p>
      </section>

      <section>
        <h2>Películas</h2>
        <p>Total: {peliculas.length}</p>
      </section>
    </>
  );
}

export default App;
