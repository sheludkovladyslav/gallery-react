import PropTypes from "prop-types";
import { Author } from "./Author";

export const GalleryItem = ({ title, price, quantity, author, imgUrl }) => {
  const alt = `Фото картки товару ${title}`;

  return (
    <article>
      <img src={imgUrl} alt={alt} />
      <h2>{title}</h2>
      <Author tag={author.tag} url={author.url} />
      <p>{price}</p>
      <p>{quantity}</p>
    </article>
  );
};

GalleryItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  imgUrl: PropTypes.string,
};
