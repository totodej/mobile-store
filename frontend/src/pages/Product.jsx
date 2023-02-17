import "../styles/pages/Product.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Product() {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  if (!data) {
    return null;
  }

  const findElement = data.filter((p) => p.id === Number(params.id));
  const product = findElement[0];

  const addToCart = () => {
    const local = window.localStorage.getItem("cart");
    const cart = JSON.parse(local);

    cart.push(product);
    console.log(cart);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="product-container">
      <Header products={data} />
      <section>
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="descriptions">
          <h1>{product.brand.toUpperCase() + " " + product.title}</h1>
          <p className="price">{product.price} €</p>
          <button onClick={addToCart}>Ajouter au panier</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Product;
