function GameCard({ game }) {
  return (
    <article>
      <h3>{game.title}</h3>
      <p>platform: {game.platform}</p>
    </article>
  );
}

export default GameCard;
