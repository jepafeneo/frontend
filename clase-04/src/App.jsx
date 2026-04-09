import "./App.css";

function App() {
  const series = [
    "La casa de papel",
    "Élite",
    "La que se avecina",
    "Vis a vis",
  ];
  // console.log(series);

  // const newSeries = series.map((title) => "Serie: " + title);
  // console.log(newSeries);

  const games = [
    "Fortnite",
    "The Last of Us",
    "Call of Duty",
    "League of Legends",
    "Starcraft",
    "Mir4",
  ];
  // console.log(games);

  // const newGames = games.map((game) => "juego: " + game);
  // const newGames = games.map((game) => `Juego: ${game}`);
  // console.log(newGames);

  // const juegos = games.map((juego) => "Juego: " + juego);
  // console.log(juegos);

  // const gameList = games.map((game) => game);
  // console.log(gameList);

  return (
    <>
      <h1>Welcome to React</h1>

      <h2>Series</h2>

      {/* <ul>
        {series.map(title => <li>{"Serie: " + title}</li>)}
      </ul> */}

      <ul>
        {series.map((title) => (
          <li key={title}>{"Serie: " + title}</li>
        ))}
      </ul>

      {/* <ul>
        {games.map((juego) => (
          <li key={juego}>{`Juego: ${juego}`}</li>
        ))}
      </ul> */}

      {/* <ul>
        {games.map((title) => (
          <li key={title}>{"Juego: " + title}</li>
        ))}
      </ul> */}

      <ul>
        {games.map((title) => (
          <li key={title}>{"Game: " + title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
