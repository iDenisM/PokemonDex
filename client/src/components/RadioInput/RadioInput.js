import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({ id, value, group, children, addClass, onChange, onBlur, ...props}) => {
  return (
    <div className={[...addClass].join(' ')} {...props}>
      <input 
        id={id} 
        className="is-vHidden"
        type="radio" 
        value={value} 
        name={group} 
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={id}>
        { children }
      </label>
    </div>
  )
}

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  group: PropTypes.string,
  children: PropTypes.node,
  addClass: PropTypes.array,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
}

RadioInput.defaultProps = {
  addClass: []
};

export default RadioInput;