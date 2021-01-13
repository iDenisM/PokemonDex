import './PlayerDeck.css';
import React from 'react';
import Deck from '../Deck';
import { useSelector } from 'react-redux';
import Engine from '../../Engine';

const PlayerDeck = () => {
  const cards = useSelector((state) => state.pokemonList);
  const gameStarted = useSelector((state) => state.gameStarted);
  Engine.addPlayerCards(cards);
  
  let classList = ['deck__player'];
  if (cards.length) classList.push('deck--open');
  if (gameStarted) classList.push('card__close--hide')
  
  return (
    <Deck cards={cards} addClass={classList} />
  )
}

export default PlayerDeck;