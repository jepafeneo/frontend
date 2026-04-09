import "./App.css";
import SerieCard from "./components/SerieCard";

function App() {
  // const series = [
  //   "La casa de papel",
  //   "Élite",
  //   "La que se avecina",
  //   "Vis a vis",
  // ];
  // console.log(series);

  // const newSeries = series.map((title) => "Serie: " + title);
  // console.log(newSeries);

  // const games = [
  //   "Fortnite",
  //   "The Last of Us",
  //   "Call of Duty",
  //   "League of Legends",
  //   "Starcraft",
  //   "Mir4",
  // ];
  // console.log(games);

  // const newGames = games.map((game) => `Juego: ${game}`);
  // console.log(newGames);

  const series = [
    { id: 1, title: "La casa de papel", year: 2017 },
    { id: 2, title: "Élite", year: 2018 },
    { id: 3, title: "La que se avecina", year: 2007 },
    { id: 4, title: "Vis a vis", year: 2015 },
  ];

  const games = [
    { id: 1, title: "Fortnite", platform: "PC" },
    { id: 2, title: "The Last of Us", platform: "PlayStation" },
    { id: 3, title: "Call of Duty", platform: "Xbox" },
    { id: 4, title: "League of Legends", platform: "PC" },
  ];

  return (
    <>
      <h1>Welcome to React</h1>

      <h2>Series</h2>

      <section>
        {series.map((serie) => (
          <SerieCard key={serie.id} serie={serie} />
        ))}
      </section>

      <h2>Juegos</h2>

      <section>
        {games.map((game) => (
          <article key={game.id}>
            <h3>{game.title}</h3>
            <p>Plataforma: {game.platform}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default App;
