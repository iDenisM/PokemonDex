import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Modal.css';

const Modal = ({ show, children, addClass, onClose, ...porps }) => {
  let classList = ['modal'];
  
  if (show) {
    document.body.classList.add('scroll-off');
    classList.push('modal--open');
  } else {
    document.body.classList.remove('scroll-off');
  }

  return (
    <div className={[...classList, ...addClass].join(' ')} {...porps}>
      <div className="modal__content" >
        <Button addClass={['modal__btn']} onClick={onClose}>
          <span className="ico"></span>
          <span className="text is-vHidden">Close</span>
        </Button>
        { children }
      </div>
      <div className="modal__overlay" onClick={onClose}></div>
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
  addClass: PropTypes.array,
  onClose: PropTypes.func
}

Modal.defaultProps = {
  show: false,
  addClass: []
};

export default Modal;