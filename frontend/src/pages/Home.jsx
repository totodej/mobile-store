import Header from "../components/Header";
import imageHomePage from "../assets/calling-dial-fashion-forest.jpg";
import "../styles/pages/Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div className="home-page">
      <Header products={data} />
      <div className="home-page-image">
        <h1>Téléphoner devient un sixième sens</h1>
        <img src={imageHomePage} alt="page d'accueil" />
      </div>
    </div>
  );
}

export default Home;
