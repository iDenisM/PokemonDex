import './Board.css';
import { useState } from 'react';
import PlayerDeck from '../PlayerDeck';
import BotDeck from '../BotDeck';
import Engine from '../../Engine';
import BoardCard from '../BoardCard/BoardCard';
import Card from '../Card';
import { useSelector, useDispatch } from 'react-redux';
import { askedToEndGame } from '../../actions'
import CloseGameModal from '../CloseGameModal/CloseGameModal';

const Board = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showCloseGameModal, setShowCloseGameModal] = useState(false);
  const gameStarted = useSelector((state) => state.gameStarted);
  const playerAction = useSelector((state) => state.playerAction);
  
  const playerCard = Engine.getPlayerCardById(playerAction.pickedCardId);
  const botCard = Engine.getBotCard(playerCard);

  if (Engine.gameFinished && !showCloseGameModal && Engine.gameStarted) {
    setShowCloseGameModal(true);
  }

  const toggleBoard = () => {
    setIsOpened(!isOpened)
  }

  const hideCloseGameModal = () => {
    setShowCloseGameModal(false);
  }

  let boardClassList = ['board'];

  if (gameStarted && !isOpened) toggleBoard();
  if (!gameStarted && isOpened) toggleBoard();
  if (isOpened) boardClassList.push('board--open');

  const playerAttack1 = () => {
    console.log(playerCard.attacks.fast.damage);
  }

  const playerAttack2 = () => {
    console.log(playerCard.attacks.special.damage);
  }

  if (playerAction.playerTurn) {
    if (playerAction.pickedCardId) Engine.getBotCard(playerCard)
  } else {

  }

  return (
    <>
      <BotDeck />
      <div className={boardClassList.join(' ')}>
        <BoardCard 
          card={botCard}
          addClass={['board__card--bot']}>
          {
            botCard && (
              <Card card={botCard} />
            )
          }
        </BoardCard>
        <BoardCard 
          card={playerCard}
          addClass={['board__card--player']} 
          hasLockButton={true} 
          attack1Click={playerAttack1}
          attack2Click={playerAttack2}>
          {
            playerCard && (
              <Card card={playerCard} />
            )
          }
        </BoardCard>
      </div>
      <PlayerDeck />
      <CloseGameModal show={showCloseGameModal} onClose={hideCloseGameModal} />
    </>
  )
}

export default Board;