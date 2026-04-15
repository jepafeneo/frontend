import "./ProductCard.css";

function ProductCard({ name, price, stock }) {

  return (
    <article className="product-card">
      <h3>{name}</h3>
      <p>$ {price}</p>
      <p>Stock: {stock}</p>
    </article>
  );
}

export default ProductCard;
