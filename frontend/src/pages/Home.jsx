import "../styles/pages/Home.css";
import Header from "../components/Header";
import imageHomePage from "../assets/calling-dial-fashion-forest.jpg";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState(null);
  const cart = window.localStorage.getItem("cart");
  if (cart === null) {
    const newCart = [];
    window.localStorage.setItem("cart", JSON.stringify(newCart));
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div className="home-page">
      <Header products={data} />
      <div className="home-page-image">
        <h1>Téléphoner devient un sixième sens</h1>
        <img src={imageHomePage} alt="page d'accueil" />
      </div>
      <Collection products={data} />
      <Footer />
    </div>
  );
}

export default Home;
