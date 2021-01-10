import React from 'react';
import { useSelector } from 'react-redux';
import './CardsDeck.css';

const CardsDeck = () => {
  const selectSearchProduct = (state) => state.addPokemon;
  const pokemonList = useSelector(selectSearchProduct);
  console.log(pokemonList);

  return (
    <div>Hello</div>
  )
}

export default CardsDeck;