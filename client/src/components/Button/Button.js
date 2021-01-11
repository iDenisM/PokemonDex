import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, addClass, ...porps }) => {
  return (
    <button className={['btn', ...addClass].join(' ')} {...porps}>
      { children }
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  addClass: PropTypes.array,
  onClick: PropTypes.func
}

Button.defaultProps = {
  addClass: [],
  onClick: undefined
};

export default Button;