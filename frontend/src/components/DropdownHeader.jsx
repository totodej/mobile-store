import "../styles/components/DropdownHeader.css";
import { Link } from "react-router-dom";

function DropdownHeader(props) {
  const products = props.products;

  const productsType = () => {
    const array = [];
    products.forEach((product) => {
      array.push(product.type);
    });

    return array.filter((x, i) => array.indexOf(x) === i);
  };

  const productsBrand = () => {
    const array = [];
    products.forEach((product) => {
      array.push(product.brand);
    });

    return array.filter((x, i) => array.indexOf(x) === i);
  };

  return (
    <div className="dropdown-header">
      <ul className="types">
        {productsType().map((type, i) => (
          <li key={i}>{type}</li>
        ))}
      </ul>
      <ul className="brands">
        {productsBrand().map((brand, i) => (
          <li key={i}>
            <Link to={"/products?brand=" + brand} className="link">
              {brand}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownHeader;
