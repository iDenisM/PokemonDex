import './StartButton.css';
import { useState } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { doStartGame, doEndGame, addBots, removeBots, playerPickedCard, playerTrun } from '../../actions'
import Engine from '../../Engine';

const Header = () => {
  const [showGameBoard, setShowGameBoard] = useState(false);
  const [showNoCardsWarning, setShowNoCardsWarning] = useState(false);
  const [showCloseWarning, setShowCloseWarning] = useState(false);

  const updatedPlayerCards = useSelector((state) => state.pokemonList);
  const dispatchEvent = useDispatch();
  
  const startGame = () => {
    if (updatedPlayerCards.length === 0) {
      return showWarningOnScreen();
    }
    if (!Engine.gameStarted) {
      Engine.startGame();
    }
    if (showGameBoard && Engine.gameStarted) {
      setShowCloseWarning(true);
    } else if (Engine.gameStarted) {
      dispatchEvent(playerTrun(Engine.getCurrentTurn()));
      dispatchEvent(addBots(Engine.botDraftCards));
      dispatchEvent(doStartGame());
      setShowGameBoard(true);
    }
  }

  const endGame = () => {
    Engine.endGame()
    dispatchEvent(removeBots());
    dispatchEvent(playerPickedCard(null))
    dispatchEvent(doEndGame());
    setShowCloseWarning(false);
    setShowGameBoard(false);
  }

  const resetGame = () => {
    // Engine.reset();
  }
  
  const showWarningOnScreen = () => {
    setShowNoCardsWarning(true);
    setTimeout(() => {
      setShowNoCardsWarning(false);
    }, 1500);
  }

  return (
    <>
      <Button addClass={['header__btn']} onClick={startGame} >
        {
          showGameBoard ? 
          (<span className="text">End Game</span>) :
          (<span className="text">Start Game</span>)
        }
      </Button>
      <Modal show={showNoCardsWarning} addClass={['modal__warr']}>
        <span className="modal__warr__text">Please select at least one pokemon</span>
      </Modal>
      <Modal show={showCloseWarning} addClass={['modal__start']} onClose={endGame}>
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