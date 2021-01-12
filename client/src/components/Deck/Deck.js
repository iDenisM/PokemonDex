import './Deck.css';
import React from 'react';
import Image from '../Image';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { removePokemonFromList } from '../../actions';

const Deck = ({ cards, addClass }) => {
  console.log(cards);
  const dispatchRemove = useDispatch();

  const removeCard = (id) => {
    dispatchRemove(removePokemonFromList({id}));
  }

  return (
    <div className={['deck', ...addClass].join(' ')}>
      {
        cards.length > 0 && cards.map(card => (
          <div key={card.id} className="deck__card">
            <Image src={card.image} alt={card.name} width={20} height={20} />
            <Button addClass={['deck__close']} onClick={() => {
              removeCard(card.id)
            }} >
              <span className="ico"></span>
              <span className="is-vHidden">Remove</span>
            </Button>
          </div>
        ))
      }
    </div>
  )
}

export default Deck;