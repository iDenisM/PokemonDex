import './Header.css';
import React from 'react';
// import Image from '../Image';
import StartButton from '../StartButton';
// import logo from '../../static/Pokemon-Logo.png';

const Header = () => {

  return (
    <header className="header">
      {/* <Image addClass={['header__logo']} src={logo} alt="pokemon logo" width={100} height={50} /> */}
      <StartButton />
    </header>
  )
}

export default Header;