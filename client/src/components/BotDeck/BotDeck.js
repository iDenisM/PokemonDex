import './BotDeck.css';
import React from 'react';
import Deck from '../Deck';
import GetCard from '../GetCard';
import { useSelector } from 'react-redux';

const BotDeck = () => {
  const cards = useSelector((state) => state.botPokemonList);
  
  let classList = ['deck__bot'];
  if (cards.length) classList.push('deck--open');

  return (
    <Deck addClass={classList}>
      {
        cards && cards.length > 0 && cards.map(c => (
          <GetCard key={c.id} id={c.id} name={c.name} />
        ))
      }
    </Deck>
  )
}

export default BotDeck;