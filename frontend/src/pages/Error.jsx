import "../styles/pages/Error.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Error() {
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
    <div className="error-container">
      <Header products={data} />
      <section>
        <h2>Error 404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="link">
          Retourner sur la page d'acceuil
        </Link>
      </section>

      <Footer />
    </div>
  );
}

export default Error;
