import './PlayerDeck.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Deck from '../Deck';

const PlayerDeck = () => {
  const cards = useSelector((state) => state.pokemonList);
  
  let classList = ['deck__player'];
  if (cards.length) classList.push('deck--open');
  
  return (
    <Deck cards={cards} addClass={classList} />
  )
}

export default PlayerDeck;