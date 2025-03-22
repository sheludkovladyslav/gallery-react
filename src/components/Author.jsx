import PropTypes from "prop-types";

export const Author = ({ tag, url }) => (
  <div>
    <h2>{tag}</h2>
    <a href={url}>{url}</a>
  </div>
);

Author.propTypes = {
  tag: PropTypes.string,
  url: PropTypes.string,
};
