import React from 'react';
import Image from '../Image';
import Button from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import { removePokemonFromList } from '../../actions';
import './CardsDeck.css';

const CardsDeck = () => {
  const pokemonList = useSelector((state) => state.pokemonList);
  const dispatchRemove = useDispatch();
  let classList = ['deck'];
  if (pokemonList.length) classList.push('deck--open');
  
  const removeCard = (id) => {
    dispatchRemove(removePokemonFromList({id}));
  }
  
  return (
    <div className={classList.join(' ')}>
      {
        pokemonList.length > 0 && pokemonList.map(pokemon => (
          <div key={pokemon.id} className="deck__card">
            <Image src={pokemon.image} alt={pokemon.name} width={20} height={20} />
            <Button addClass={['deck__close']} onClick={() => {
              removeCard(pokemon.id)
            }} >
              <span className="ico"></span>
              <span className="is-vHidden">Remove</span>
            </Button>
          </div>
        ))
      }
    </div>
  )
}

export default CardsDeck;