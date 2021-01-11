import './Board.css';
import { useState } from 'react';
import Modal from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStartEndGame } from '../../actions'
import { reset, end } from '../../worker';
import Button from '../Button';

const Board = () => {
  const [isOpened, setIsOpened] = useState(false);
  const triggeredToOpen = useSelector((state) => state.startEndGame);
  const dispatchEvent = useDispatch();

  const endGame = () => {
    end();
    dispatchEvent(toggleStartEndGame());
  }

  const resetGame = () => {
    reset();
  }

  const toggleBoard = () => {
    setIsOpened(!isOpened)
  }

  let boardClassList = ['board'];

  if (triggeredToOpen && !isOpened) toggleBoard();
  if (!triggeredToOpen && isOpened) toggleBoard();
  if (isOpened) boardClassList.push('board--open');

  return (
    <article className={boardClassList.join(' ')}>
      <header className="is-vHidden">Let's Play</header>

      <Modal addClass={['board__modal']} onClose={endGame}>
        <Button addClass={['board__modal__close']} onClick={resetGame}>
          <span className="text">Restart Game</span>
        </Button>
        <Button addClass={['board__modal__close']} onClick={endGame}>
          <span className="text">End Game</span>
        </Button>
      </Modal>
    </article>
  )
}

export default Board;