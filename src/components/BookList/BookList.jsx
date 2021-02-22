import React from 'react';
import PropTypes from 'prop-types';

import BookItem from './BookItem';

const BookList = ({ books }) => (
  <ul>
    {books.map(book => (
      <BookItem key={book.id} book={book} />
    ))}
  </ul>
);

BookList.defaultProps = {
  books: [],
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default BookList;
