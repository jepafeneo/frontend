function SerieCard({ serie }) {
  let nueva = false;

  if (serie.year == 2026) {
    nueva = true;
  }

  return (
    <article className="card">
      <h3>{serie.title}</h3>
      <p>Año: ${serie.year}</p>

      <p>{nueva == true ? "Estreno" : ""}</p>
    </article>
  );
}

export default SerieCard;
