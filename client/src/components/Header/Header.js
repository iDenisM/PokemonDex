import './Header.css';
import { useState } from 'react';
import Image from '../Image';
import Button from '../Button';
import logo from '../../static/Pokemon-Logo.png';
import { useDispatch } from 'react-redux';
import { toggleStartEndGame } from '../../actions'
import { useSelector } from 'react-redux';
import { useTakeALongTimeToAddTwoNumbers } from "../../worker";

const Header = () => {
  const cards = useSelector((state) => state.pokemonList);
  const dispatchEvent = useDispatch();
  const start = useTakeALongTimeToAddTwoNumbers(cards);

  // const toStart = StartTheGame(1);
  const tryStartingGame = () => {
    dispatchEvent(toggleStartEndGame());
    // if (toStart) setStartGame(state => !state)
  }

  console.log(start);

  return (
    <header className="header">
      <Image addClass={['header__logo']} src={logo} alt="pokemon logo" width={100} height={50} />
      <Button addClass={['header__btn']} onClick={tryStartingGame} >
        {
          start.ready ? 
          (<span className="text">End Game</span>) :
          (<span className="text">Start Game</span>)
        }
      </Button>
    </header>
  )
}

export default Header;