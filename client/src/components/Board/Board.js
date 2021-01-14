import './Board.css';
import { useState } from 'react';
import PlayerDeck from '../PlayerDeck';
import BotDeck from '../BotDeck';
import Engine from '../../Engine';
import BoardCard from '../BoardCard/BoardCard';
import Card from '../Card';
import { useSelector } from 'react-redux';
import CloseGameModal from '../CloseGameModal/CloseGameModal';

const Board = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showCloseGameModal, setShowCloseGameModal] = useState(false);
  const [isPlayersCurrentTurn, setIsPlayersCurrentTurn] = useState(true);
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

  if (!isPlayersCurrentTurn) {
    // bot attacks
  }

  const playerFastAttack = () => {
    // if (!isPlayersCurrentTurn) return false;
    Engine.doAttack('fast', playerCard, botCard);
    Engine.botDoAttack(botCard, playerCard);
    setIsPlayersCurrentTurn(state => !state);
  }
  
  const playerSpecialAttack = () => {
    // if (!isPlayersCurrentTurn) return false;
    Engine.doAttack('special', playerCard, botCard);
    Engine.botDoAttack(botCard, playerCard);
    setIsPlayersCurrentTurn(state => !state);
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
          attack1Click={playerFastAttack}
          attack2Click={playerSpecialAttack}>
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