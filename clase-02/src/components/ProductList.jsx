import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductCard key={product.id} name={product.name} />
      ))}
    </ul>
  );
}

export default ProductList;
