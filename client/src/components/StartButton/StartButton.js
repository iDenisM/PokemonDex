import './StartButton.css';
import { useState } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import { useDispatch } from 'react-redux';
import { doStartGame, addBots } from '../../actions'
import Engine from '../../Engine';
import CloseGameModal from '../CloseGameModal/CloseGameModal';

const Header = () => {
  const [showCloseGameModal, setShowCloseGameModal] = useState(false);
  const [showNoCardsWarning, setShowNoCardsWarning] = useState(false);
  const dispatchEvent = useDispatch();

  const toggleStartEndGame = () => {
    if (Engine.payerCards.length === 0) {
      return showWarningOnScreen();
    }
    if (!Engine.gameStarted) {
      Engine.startGame();
      return dispatchEvent(doStartGame());
    } else {
      setShowCloseGameModal(true);
    }
  }

  const closeEndGameModal = () => {
    setShowCloseGameModal(false)
  }

  const showWarningOnScreen = () => {
    setShowNoCardsWarning(true);
    setTimeout(() => {
      setShowNoCardsWarning(false);
    }, 1500);
  }

  return (
    <>
      <Button addClass={['header__btn']} onClick={toggleStartEndGame} >
        {
          Engine.gameStarted ? 
          (<span className="text">End Game</span>) :
          (<span className="text">Start Game</span>)
        }
      </Button>
      <Modal show={showNoCardsWarning} addClass={['modal__warr']}>
        <span className="modal__warr__text">Please select at least one pokemon</span>
      </Modal>
      <CloseGameModal show={showCloseGameModal} onClose={closeEndGameModal}/>
    </>
  )
}

export default Header;