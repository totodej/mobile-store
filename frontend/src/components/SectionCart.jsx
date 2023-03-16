import "../styles/components/SectionCart.css";
import closeIcon from "../assets/close.png";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/CartSlice";

function SectionCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalItem = () => {
    const array = [];
    let total = 0;
    cart.forEach((product) => {
      array.push({
        price: product.price,
        quantity: product.quantity,
        total: product.price * product.quantity,
      });
    });

    if (array.length !== 0) {
      array.forEach((product) => {
        total = total + product.quantity;
      });
    }

    return total;
  };

  const totalPrice = () => {
    const array = [];
    let total = 0;
    cart.forEach((product) => {
      array.push({
        price: product.price,
        quantity: product.quantity,
        total: product.price * product.quantity,
      });
    });

    if (array.length !== 0) {
      array.forEach((product) => {
        total = total + product.total;
      });
    }

    return total;
  };

  const deleteProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  const increaseQuantity = (product) => {
    dispatch(incrementQuantity(product));
  };

  const decreaseQuantity = (product) => {
    dispatch(decrementQuantity(product));
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
            <div className="quantity">
              <button
                className="button-quantity"
                onClick={() => {
                  decreaseQuantity(product);
                }}
              >
                -
              </button>
              {product.quantity}
              <button
                className="button-quantity"
                onClick={() => {
                  increaseQuantity(product);
                }}
              >
                +
              </button>
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
              Panier <span className="sup">({totalItem()})</span>
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
