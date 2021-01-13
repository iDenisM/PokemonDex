import './StartButton.css';
import { useState } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import { useDispatch } from 'react-redux';
import { toggleStartEndGame } from '../../actions'
import { useSelector } from 'react-redux';
import { useStartGame, useAddPlayerCards } from "../../worker";

const Header = () => {
  const [tryStartGame, setTryStarGame] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showClose, setShowClose] = useState(false);

  const updatedPlayerCards = useSelector((state) => state.pokemonList);
  const dispatchEvent = useDispatch();

  useAddPlayerCards(updatedPlayerCards);
  const game = useStartGame(tryStartGame);

  const startGame = () => {
    if (updatedPlayerCards.length === 0) {
      showWarningOnScreen();
    } else if (!game.started && !game.isStarting) {
      setTryStarGame(state => !state);
    }
    // if (playBoardIsVisible && start.ready) {
    //   setShowClose(true);
    // } else if (start.ready) {
    //   setPlayBoardIsVisible(true);
    //   // dispatchEvent(toggleStartEndGame());
    // } else {
    //   showWarningOnScreen();
    // }
  }

  const endGame = () => {
    // end();
    dispatchEvent(toggleStartEndGame());
  }

  const resetGame = () => {
    // reset();
  }
  
  const showWarningOnScreen = () => {
    setShowWarning(true);
    setTimeout(() => {
      setShowWarning(false);
    }, 1500);
  }

  return (
    <>
      <Button addClass={['header__btn']} onClick={startGame} >
        {
          game.started ? 
          (<span className="text">End Game</span>) :
          (<span className="text">Start Game</span>)
        }
      </Button>
      <Modal show={showWarning} addClass={['modal__warr']}>
        <span className="modal__warr__text">Please select at least one pokemon</span>
      </Modal>
      <Modal show={showClose} addClass={['modal__start']} onClose={endGame}>
        <Button addClass={['modal__start__restart']} onClick={resetGame}>
          <span className="text">Restart Game</span>
        </Button>
        <Button addClass={['modal__start__close']} onClick={endGame}>
          <span className="text">End Game</span>
        </Button>
      </Modal>
    </>
  )
}

export default Header;