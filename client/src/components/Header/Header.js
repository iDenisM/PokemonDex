import './Header.css';
import { useState } from 'react';
import Image from '../Image';
import Button from '../Button';
import logo from '../../static/Pokemon-Logo.png';
import { useDispatch } from 'react-redux';
import { toggleStartEndGame } from '../../actions'
import { start } from '../../worker';

const Header = () => {
  const [gameStarted, setStartGame] = useState(false);
  const dispatchEvent = useDispatch();
  const startGame = () => {
    dispatchEvent(toggleStartEndGame());
    start();
    setStartGame(state => !state)
  }
  return (
    <header className="header">
      <Image addClass={['header__logo']} src={logo} alt="pokemon logo" width={100} height={50} />
      <Button addClass={['header__btn']} onClick={startGame} >
        {
          gameStarted ? 
          (<span className="text">End Game</span>) :
          (<span className="text">Start Game</span>)
        }
      </Button>
    </header>
  )
}

export default Header;