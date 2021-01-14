import './BotDeck.css';
import React from 'react';
import Deck from '../Deck';
import GetCard from '../GetCard';
import { useSelector } from 'react-redux';
import Engine from '../../Engine';

const BotDeck = () => {
  const gameStarted = useSelector((state) => state.gameStarted);

  const botCards = gameStarted ? Engine.botDraftCards : [];
  
  let classList = ['deck__bot', 'card__close--hide'];
  if (botCards.length) classList.push('deck--open');

  return (
    <Deck addClass={classList}>
      {
        botCards && botCards.length > 0 && botCards.map(c => (
          <GetCard key={c.id} id={c.id} name={c.name} />
        ))
      }
    </Deck>
  )
}

export default BotDeck;