import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </ul>
  );
}

export default ProductList;
