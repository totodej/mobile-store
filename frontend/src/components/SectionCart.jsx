import "../styles/components/SectionCart.css";
import closeIcon from "../assets/close.png";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/CartSlice";

function SectionCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = () => {
    const array = [];
    let total;
    cart.forEach((product) => {
      array.push(product.price);
    });
    array.length !== 0
      ? (total = array.reduce((num1, num2) => num1 + num2))
      : (total = 0);

    return total;
  };

  const deleteProduct = (product) => {
    console.log(product);
    dispatch(removeFromCart(product));
  };

  return (
    <section>
      <article>
        {cart.map((product, index) => (
          <div key={index} className="my-product">
            <img
              onClick={() => deleteProduct(product)}
              src={closeIcon}
              className="cross-icon"
              alt="icon close"
            />
            <div className="descriptions">
              <h2>{product.title}</h2>
              <h3>{product.brand}</h3>
              <p>{product.price} €</p>
            </div>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
          </div>
        ))}
      </article>
      <aside>
        <div className="cart">
          <div className="cart-description-price">
            <p>
              Panier <span className="sup">({cart.length})</span>
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
