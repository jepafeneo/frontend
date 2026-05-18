import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import styles from "./ProductCard.module.css";

function ProductCard({ product, handleDelete }) {
  const { user } = useAuth();

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.price}>$ {product.price}</p>

      <div className={styles.actions}>
        <Link to={"/products/" + product._id} className="button">
          Detalle
        </Link>

        {user && (
          <>
            <Link to={`/products/${product._id}/edit`} className="button">
              Editar
            </Link>
            <button onClick={() => handleDelete(product._id)}>Eliminar</button>
          </>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
