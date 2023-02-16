import "../styles/pages/Cart.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import SectionCart from "../components/SectionCart";

function Cart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div className="cart-container">
      <Header products={data} />
      <SectionCart />
      <Footer />
    </div>
  );
}

export default Cart;
