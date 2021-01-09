import React from 'react';
import Image from '../Image';
import Button from '../Button';

const Header = () => {
  return (
    <header className="header">
      <Image src="../../" alt="pokemon logo" width="100" height="50"/>
      <Button addClass={['btn__header']}>
        <span className="text">Fight Button</span>
      </Button>
    </header>
  )
}

export default Header;