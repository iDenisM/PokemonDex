import './BotDeck.css';
import React from 'react';
import Deck from '../Deck';
import { useSelector } from 'react-redux';

const BotDeck = () => {
  const cards = useSelector((state) => state.pokemonList);
  
  let classList = ['deck__bot'];
  if (cards.length) classList.push('deck--open');

  return (
    <Deck cards={cards} addClass={classList} hasRemoveBtn={false} />
  )
}

export default BotDeck;