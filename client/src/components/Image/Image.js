import React from 'react'
import PropTypes from 'prop-types';
import './Image.css';

const Image = ({ src, alt, width, height, addClass }) => {
  const aspectRatio = `${height * 100 / width}%`;
  return (
    <div className={['img', ...addClass].join(' ')} style={{paddingBottom: aspectRatio}}>
      <img className="img__src" src={src} alt={alt} width={width} height={height}/>
    </div>
  )
}

Image.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  addClass: []
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  addClass: PropTypes.array
}

export default Image;