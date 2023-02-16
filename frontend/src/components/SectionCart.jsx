import "../styles/components/SectionCart.css";
import { useState } from "react";
import closeIcon from "../assets/close.png";

function SectionCart() {
  const [list, setList] = useState(
    JSON.parse(window.localStorage.getItem("cart"))
  );

  const totalPrice = () => {
    const array = [];
    let total;
    list.forEach((product) => {
      array.push(product.price);
    });
    array.length !== 0
      ? (total = array.reduce((num1, num2) => num1 + num2))
      : (total = 0);

    return total;
  };

  const deleteProduct = (id) => {
    console.log(id);
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    window.localStorage.setItem("cart", JSON.stringify(newList));
  };

  return (
    <section>
      <article>
        {list.map((myProduct, index) => (
          <div key={index} className="my-product">
            <img
              onClick={() => deleteProduct(myProduct.id)}
              src={closeIcon}
              className="cross-icon"
              alt="icon close"
            />
            <div className="descriptions">
              <h2>{myProduct.title}</h2>
              <h3>{myProduct.brand}</h3>
              <p>{myProduct.price} €</p>
            </div>
            <img
              src={myProduct.image}
              alt={myProduct.title}
              className="product-image"
            />
          </div>
        ))}
      </article>
      <aside>
        <div className="cart">
          <div className="cart-description-price">
            <p>
              Panier <span className="sup">({list.length})</span>
            </p>
            <p>{totalPrice()} €</p>
          </div>
          <div className="cart-description-price">
            <p>Frais de livraison estimés</p>
            <p>Gratuit</p>
          </div>
          <div className="cart-description-price">
            <h4>
              TOTAL <span className="sup">(TVA incluse)</span>
            </h4>
            <h4 className="total-price">{totalPrice()} €</h4>
          </div>
          {totalPrice() !== 0 ? <button>Passer la commande</button> : null}
        </div>
      </aside>
    </section>
  );
}

export default SectionCart;
