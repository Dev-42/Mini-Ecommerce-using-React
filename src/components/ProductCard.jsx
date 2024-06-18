// eslint-disable-next-line react/prop-types
import style from "./ProductCard.module.css";
function ProductCard({ title, price, description, category, image, rating }) {
  console.log(image);
  return (
    <div className={style.card}>
      <img src={image} alt="Product Image..." width={200} height={200} />
      <h2>Title : {title}</h2>
      <p>Category : {category}</p>
      <p>Price: {price}</p>
      <p>
        Rating: {rating.rate} votes - {rating.count}
      </p>
    </div>
  );
}

export default ProductCard;
