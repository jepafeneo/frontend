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
  const [loadingProducts, setLoadingProducts] = useState(true);

  const [juegos, setJuegos] = useState([]);
  const [loadingJuegos, setLoadingJuegos] = useState(true);

  const [peliculas, setPeliculas] = useState([]);
  const [loadingPeliculas, setLoadingPeliculas] = useState(true);

  // const [coches, setCoches] = useState([]);

  useEffect(() => {
    console.log("El componente ya se renderizó");
  }, []);

  useEffect(() => {
    console.log("userEffect []", products);
    setTimeout(() => {
      setProducts(fakeProducts);
      setLoadingProducts(false);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("useEffect [products]", products);
    if (products.length > 0) {
      console.log("Ya tenemos productos");
    }
  }, [products]);

  useEffect(() => {
    setTimeout(() => {
      setJuegos(fakeJuegos);
      setLoadingJuegos(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPeliculas(fakePeliculas);
      setLoadingPeliculas(false);
    }, 2000);
  }, []);

  return (
    <>
      <h1>Clase 05</h1>

      <section>
        <h2>Productos</h2>

        {loadingProducts && <p>Cargando productos...</p>}

        <button onClick={() => setProducts([])}>Vaciar productos</button>

        {products.map((product) => (
          <p key={`product-${product.id}`}>{product.name}</p>
        ))}

        <p>Total: {products.length}</p>
      </section>

      <section>
        <h2>Juegos</h2>

        {loadingJuegos && <p>Cargando juegos...</p>}

        <button
          onClick={() => {
            setJuegos([]);
          }}
        >
          Vaciar juegos
        </button>

        {juegos.map((juego) => (
          <p key={`juegos-${juego.id}`}>{juego.name}</p>
        ))}

        <p>Total: {juegos.length}</p>
      </section>

      <section>
        <h2>Películas</h2>

        {loadingPeliculas && <p>Cargando películas...</p>}

        <button onClick={() => setPeliculas([])}>Vaciar Peliculas</button>

        {peliculas.map((pelicula) => (
          <div key={pelicula.id}>
            <h3>{pelicula.titulo}</h3>
            <p>Director: {pelicula.director}</p>
            <p>Año: {pelicula.año}</p>
          </div>
        ))}

        <p>Total: {peliculas.length}</p>
      </section>
    </>
  );
}

export default App;
