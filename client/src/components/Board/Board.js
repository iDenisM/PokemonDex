import './Board.css';
import { useState } from 'react';
import PlayerDeck from '../PlayerDeck';
import BotDeck from '../BotDeck';
import { useSelector } from 'react-redux';
import Engine from '../../Engine';

const Board = () => {
  const [isOpened, setIsOpened] = useState(false);
  const gameStarted = useSelector((state) => state.gameStarted);

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
      <article className={boardClassList.join(' ')}>
        <header className="is-vHidden">Let's Play</header>
        
      </article>
      <PlayerDeck />
    </>
  )
}

export default Board;