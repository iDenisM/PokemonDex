import './Board.css';
import { useState } from 'react';
import PlayerDeck from '../PlayerDeck';
import BotDeck from '../BotDeck';
import { useSelector, useDispatch } from 'react-redux';

const Board = () => {
  const [isOpened, setIsOpened] = useState(false);
  const triggeredToOpen = useSelector((state) => state.gameState);

  const toggleBoard = () => {
    setIsOpened(!isOpened)
  }

  let boardClassList = ['board'];

  if (triggeredToOpen && !isOpened) toggleBoard();
  if (!triggeredToOpen && isOpened) toggleBoard();
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