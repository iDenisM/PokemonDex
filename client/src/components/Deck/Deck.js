import './Deck.css';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import { useDispatch } from 'react-redux';
import { removePokemonFromList } from '../../actions';

const Deck = ({ cards, addClass }) => {
  const dispatchRemove = useDispatch();

  const removeCard = (id) => {
    dispatchRemove(removePokemonFromList({id}));
  }

  return (
    <section className={['deck', ...addClass].join(' ')}>
      {
        cards.length > 0 && cards.map(card => (
          <Card key={card.id} card={card} onClick={() => {
            removeCard(card.id)
          }} />
        ))
      }
    </section>
  )
}

Deck.propTypes = {
  cards: PropTypes.array.isRequired,
  addClass: PropTypes.array,
}

Deck.defaultProps = {
  addClass: [],
};

export default Deck;