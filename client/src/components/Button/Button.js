import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, image, ...rest }) => {
  return (
    <button className="btn" {...rest}>
      { children }
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.any
}

export default Button;