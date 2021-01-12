import './Deck.css';
import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { removePokemonFromList } from '../../actions';

const Deck = ({ cards, addClass, hasRemoveBtn }) => {
  const dispatchRemove = useDispatch();

  const removeCard = (id) => {
    dispatchRemove(removePokemonFromList({id}));
  }

  return (
    <section className={['deck', ...addClass].join(' ')}>
      {
        cards.length > 0 && cards.map(card => (
          <div key={card.id} className="deck__card">
            <Image src={card.image} alt={card.name} width={20} height={20} />
            {
              hasRemoveBtn && (
                <Button addClass={['deck__close']} onClick={() => {
                  removeCard(card.id)
                }} >
                  <span className="ico"></span>
                  <span className="is-vHidden">Remove</span>
                </Button>
              )
            }
          </div>
        ))
      }
    </section>
  )
}

Deck.propTypes = {
  cards: PropTypes.array.isRequired,
  addClass: PropTypes.array,
  hasRemoveBtn: PropTypes.bool
}

Deck.defaultProps = {
  addClass: [],
  hasRemoveBtn: true
};

export default Deck;