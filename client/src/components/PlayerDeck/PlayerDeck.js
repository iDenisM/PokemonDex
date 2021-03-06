import './PlayerDeck.css';
import React from 'react';
import Deck from '../Deck';
import { useSelector, useDispatch } from 'react-redux';
import { playerPickedCard } from '../../actions'

const PlayerDeck = () => {
  const cards = useSelector((state) => state.pokemonList);
  const gameStarted = useSelector((state) => state.gameStarted);
  const playerAction = useSelector((state) => state.playerAction);
  const dispatchEvent = useDispatch();

  let classList = ['deck__player'];
  if (cards.length) classList.push('deck--open');
  if (gameStarted) classList.push('card__close--hide')

  const cardClicked = (id) => {
    if (gameStarted && playerAction.playerTurn) {
      dispatchEvent(playerPickedCard(id))
    }
  }

  return (
    <Deck cards={cards} addClass={classList} onCardClick={cardClicked} />
  )
}

export default PlayerDeck;