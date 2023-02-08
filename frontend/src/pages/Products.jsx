import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Collection from "../components/Collection";

function Products() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  const brand = queryParameters.get("brand");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  if (!data) {
    return null;
  }

  const filterBrand = () => {
    const filterProducts = [];
    data.forEach((product) => {
      if (product.brand === brand) {
        filterProducts.push(product);
      }
    });
    return filterProducts;
  };

  return (
    <div>
      <Header products={data} />
      <Collection products={filterBrand()} />
      <Footer />
    </div>
  );
}

export default Products;
