import './Board.css';
import { useState } from 'react';
import PlayerDeck from '../PlayerDeck';
import BotDeck from '../BotDeck';
import Engine from '../../Engine';
import BoardCard from '../BoardCard/BoardCard';
import Card from '../Card';
import { useSelector } from 'react-redux';

const Board = () => {
  const [isOpened, setIsOpened] = useState(false);
  const gameStarted = useSelector((state) => state.gameStarted);
  const playerAction = useSelector((state) => state.playerAction);
  const playerCard = Engine.getPlayerCardById(playerAction.pickedCardId)

  const toggleBoard = () => {
    setIsOpened(!isOpened)
  }

  let boardClassList = ['board'];

  if (gameStarted && !isOpened) toggleBoard();
  if (!gameStarted && isOpened) toggleBoard();
  if (isOpened) boardClassList.push('board--open');

  return (
    <>
      <BotDeck />
      <div className={boardClassList.join(' ')}>
        <BoardCard addClass={['board__card--bot']}>
          {

          }
        </BoardCard>
        <BoardCard addClass={['board__card--player']}>
          {
            playerCard && (
              <Card card={playerCard} />
            )
          }
        </BoardCard>
      </div>
      <PlayerDeck />
    </>
  )
}

export default Board;