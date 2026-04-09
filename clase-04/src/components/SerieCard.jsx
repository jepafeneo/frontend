function SerieCard({ serie }) {
    return (
      <article>
        <h3>{serie.title}</h3>
        <p>Año: ${serie.year}</p>
      </article>
    );
}

export default SerieCard;
