import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, addClass, ...porps }) => {
  const classNames = ['btn', ...addClass]
  return (
    <button className={classNames.join(' ')} {...porps}>
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