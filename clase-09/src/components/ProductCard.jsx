function ProductCard({ product }) {
  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <p>$ {product.price}</p>
    </article>
  );
}

export default ProductCard;
