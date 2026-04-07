function ProductCard({ product }) {
  const { name, price, category } = product;

  return (
    <li>
      <h2>{name}</h2>
      <p>$ {price}</p>
      <p>{category}</p>
    </li>
  );
}

export default ProductCard;
