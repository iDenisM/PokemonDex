import './Card.css';
import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import Button from '../Button';

const Card = ({ card, addClass, onClick }) => {
  const { image, name } = card;
  
  return (
    <div className={['card', ...addClass].join(' ')}>
      <Image addClass={['card__img']} src={image} alt={name} width={20} height={20} />
      <Button addClass={['card__close']} onClick={onClick} >
        <span className="ico"></span>
        <span className="is-vHidden">Remove</span>
      </Button>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  addClass: PropTypes.array,
  onClick: PropTypes.func
}

Card.defaultProps = {
  addClass: [],
  onClick: null
};

export default Card;