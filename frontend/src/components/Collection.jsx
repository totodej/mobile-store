import "../styles/components/Collection.css";
import { Link } from "react-router-dom";

function Collection(props) {
  const data = props.products;

  return (
    <section className="products-container">
      {data.map((product, index) => (
        <Link to={"/product/" + product.id} key={index} className="product">
          <h2>{product.title}</h2>
          <h3>{product.brand}</h3>
          <img src={product.image} alt={product.title} />
          <p>{product.price} €</p>
        </Link>
      ))}
    </section>
  );
}

export default Collection;
