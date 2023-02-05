import "../styles/components/Collection.css";

function Collection(props) {
  const data = props.products;

  return (
    <section className="products-container">
      {data.map((product, index) => (
        <div key={index} className="product">
          <h2>{product.title}</h2>
          <h3>{product.brand}</h3>
          <img src={product.image} alt={product.title} />

          <p>{product.price} €</p>
        </div>
      ))}
    </section>
  );
}

export default Collection;
