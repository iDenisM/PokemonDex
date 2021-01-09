import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, addClass, ...rest }) => {
  const classNames = ['btn', ...addClass]
  return (
    <button className={classNames.join(' ')} {...rest}>
      { children }
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  addClass: PropTypes.array
}

Button.defaultProps = {
  addClass: []
};

export default Button;