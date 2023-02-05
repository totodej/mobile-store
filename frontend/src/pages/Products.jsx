import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

function Products() {
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
    <div>
      <Header products={data} />
      <Footer />
    </div>
  );
}

export default Products;
