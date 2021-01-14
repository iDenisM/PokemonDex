import './CloseGameModal';
import React from 'react';
import PropTypes from 'prop-types';
import Engine from '../../Engine';
import Button from '../Button';
import Modal from '../Modal';
import { useDispatch } from 'react-redux';
import { doEndGame, removeBots, playerPickedCard } from '../../actions'

const CloseGameModal = ({ show, onClose }) => {
  const dispatchEvent = useDispatch();

  const endGame = () => {
    Engine.endGame()
    Engine.gameFinished = false;
    onClose();
    dispatchEvent(removeBots());
    dispatchEvent(playerPickedCard(null));
    dispatchEvent(doEndGame());
  }

  const resetGame = () => {
    // Engine.reset();
  }

  return (
    <Modal show={show} addClass={['modal__start', Engine.gameFinished ? 'winner' : '']} onClose={onClose}>
      {
        (Engine.gameFinished && show) && (
          <span className="winner">And the winner is {`${Engine.winner}`}</span>
        )
      }
      <Button addClass={['modal__start__restart']} onClick={resetGame}>
        <span className="text">Restart Game</span>
      </Button>
      <Button addClass={['modal__start__close']} onClick={endGame}>
        <span className="text">End Game</span>
      </Button>
    </Modal>
  )
}

Button.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func
}

Button.defaultProps = {
  onClose: undefined
};

export default CloseGameModal;