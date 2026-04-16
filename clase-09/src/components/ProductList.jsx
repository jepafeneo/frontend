import ProductCard from "./ProductCard";

function ProductList({ products, onSelectProduct }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;
