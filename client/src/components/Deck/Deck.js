import './Deck.css';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import { useDispatch } from 'react-redux';
import { removePokemonFromList } from '../../actions';
import Engine from '../../Engine';

const Deck = ({ cards, children, addClass, onCardClick }) => {
  const dispatchRemove = useDispatch();

  const removeCard = (id) => {
    Engine.removePlayerCard(id);
    dispatchRemove(removePokemonFromList({id}));
  }

  const clickCard = (id) => {
    onCardClick(id);
  }

  return (
    <section className={['deck', ...addClass].join(' ')}>
      {
        cards && cards.length > 0 && cards.map(card => (
          <Card key={card.id} card={card} onCloseClick={() => {
            removeCard(card.id)
          }} onClick={clickCard.bind(this, card.id)} />
        ))
      }
      { children }
    </section>
  )
}

Deck.propTypes = {
  cards: PropTypes.array,
  addClass: PropTypes.array,
}

Deck.defaultProps = {
  addClass: [],
};

export default Deck;