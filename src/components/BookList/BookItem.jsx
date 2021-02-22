import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book: { name } }) => (
  <li>
    <h3>{name}</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
      reprehenderit tempora eius voluptatibus voluptate voluptates doloremque.
    </p>
  </li>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default BookItem;
