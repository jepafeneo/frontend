import { Link, useNavigate } from "react-router-dom";

function ProductDetail() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Product Detail</h2>
      <Link to="/">Volver</Link>
      <button onClick={() => navigate("/")}>Volver</button>
    </>
  );

  // return (
  //   <>
  //     <h3>{product.name}</h3>
  //     <p>$ {product.price}</p>
  //     <p>Stock: {product.stock}</p>

  //     <button onClick={() => onBack(null)}>Volver</button>
  //   </>
  // );
}

export default ProductDetail;
