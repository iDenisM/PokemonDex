import './StartButton.css';
import React, { useState } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import CloseGameModal from '../CloseGameModal/CloseGameModal';
import { useSelector, useDispatch } from 'react-redux';
import { doStartGame } from '../../actions'
import Engine from '../../Engine';

const Header = () => {
  const [showCloseGameModal, setShowCloseGameModal] = useState(false);
  const [showNoCardsWarning, setShowNoCardsWarning] = useState(false);
  const gameStarted = useSelector((state) => state.gameStarted);
  const dispatchEvent = useDispatch();

  const toggleStartEndGame = () => {
    if (Engine.payerCards.length === 0) {
      return showWarningOnScreen();
    }
    if (gameStarted) {
      return setShowCloseGameModal(true);
    }
    
    dispatchEvent(doStartGame());
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
          gameStarted ? 
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