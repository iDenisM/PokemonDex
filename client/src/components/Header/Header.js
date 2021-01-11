import { useEffect } from 'react';
import Image from '../Image';
import Button from '../Button';
import logo from '../../static/Pokemon-Logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Image addClass={['header__logo']} src={logo} alt="pokemon logo" width={100} height={50} />
      <Button addClass={['header__btn']}>
        <span className="text">Fight Button</span>
      </Button>
    </header>
  )
}

export default Header;