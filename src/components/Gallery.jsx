import PropTypes from "prop-types";
import { GalleryItem } from "./GalleryItem";

export const Gallery = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items.map(({ id, title, price, quantity, author, url }) => (
        <li key={id}>
          <GalleryItem
            title={title}
            price={price}
            quantity={quantity}
            author={author}
            imgUrl={url}
          ></GalleryItem>
        </li>
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
      author: PropTypes.shape({
        tag: PropTypes.string,
        url: PropTypes.string,
      }),
      url: PropTypes.string,
    })
  ),
};
