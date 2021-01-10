import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Modal.css';

const Modal = ({ opened, children, addClass, ...porps }) => {
  const [isOpened, setIsOpened] = useState(false);
  let classList = ['modal'];

  const openModal = () => {
    if (!isOpened) setIsOpened(true);
  }

  const closeModal = () => {
    if (isOpened) setIsOpened(false);
  }

  if (opened) setIsOpened(true);
  if (isOpened) classList.push('modal--open');

  return (
    <div className={[...classList, ...addClass].join(' ')} {...porps}>
      <div className="modal__content" >
        <Button onClick={() => {
          closeModal();
        }}>
          <spam className="ico"></spam>
          <span className="text">Close</span>
        </Button>
        { children }
      </div>
      <div className="modal__overlay"></div>
    </div>
  )
}

Modal.propTypes = {
  opened: PropTypes.bool,
  children: PropTypes.any,
  addClass: PropTypes.array
}

Modal.defaultProps = {
  opened: false,
  addClass: []
};

export default Modal;