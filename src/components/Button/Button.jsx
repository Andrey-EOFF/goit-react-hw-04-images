import React from 'react';
import ButtonLoadMore from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick, disabled }) => (
  <ButtonLoadMore type="button" onClick={onClick} disabled={disabled}>
    Load more
  </ButtonLoadMore>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
