import React from 'react'
import PropTypes from 'prop-types';
import './Image.css';

const Image = ({ src, alt, width, height }) => {
  return (
    <img src={src} alt={alt} width={width} height={height}/>
  )
}

Image.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
}

export default Image;