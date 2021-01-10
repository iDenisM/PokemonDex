import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../Image';
import './CardsDeck.css';

const CardsDeck = () => {
  const pokemonList = useSelector((state) => state.pokemonList);
  let classList = ['deck'];
  if (pokemonList.length) classList.push('deck--open');
  console.log(pokemonList);

  return (
    <div className={classList.join(' ')}>
      {
        pokemonList.length > 0 && pokemonList.map(p => (
          <div key={p.id} className="deck__card">
            <Image src={p.image} alt={p.name} width={20} height={20} />
          </div>
        ))
      }
    </div>
  )
}

export default CardsDeck;