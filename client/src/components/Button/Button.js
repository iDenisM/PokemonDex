import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, ...rest }) => {
  return (
    <button className="btn" {...rest}>
      { children }
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any
}

// Button.defaultProps = {
// };

export default Button;