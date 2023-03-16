import "../styles/components/Header.css";
import { useState } from "react";
import DropdownHeader from "./DropdownHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header(props) {
  const products = props.products;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div id="title">Mobile Store</div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              Accueil
            </Link>
          </li>
          <li onClick={handleOpen}>
            Boutique{" "}
            {open ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </li>
          {open ? <DropdownHeader products={products} /> : null}
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link">
              Mon Panier
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
