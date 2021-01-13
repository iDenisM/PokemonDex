import './PlayerDeck.css';
import React from 'react';
import Deck from '../Deck';
import { useSelector } from 'react-redux';
import Engine from '../../Engine';

const PlayerDeck = () => {
  const cards = useSelector((state) => state.pokemonList);
  Engine.addPlayerCards(cards);
  
  let classList = ['deck__player'];
  if (cards.length) classList.push('deck--open');
  
  return (
    <Deck cards={cards} addClass={classList} />
  )
}

export default PlayerDeck;