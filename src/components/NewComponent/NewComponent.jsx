import React from 'react';
import PropTypes from 'prop-types';

const NewComponent = ({ children }) => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
      dignissimos animi nobis similique accusantium maxime nam labore, minima
      saepe quis repudiandae ipsa voluptatibus doloribus soluta tempore iure
      voluptas? Minus, itaque!
    </p>
    {children}
  </>
);

NewComponent.propTypes = {
  children: PropTypes.node,
};

export default NewComponent;
