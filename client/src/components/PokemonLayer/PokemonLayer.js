import React from 'react';
import Pokemon from '../Pokemon';
import { useSelector } from 'react-redux';
import './PokemonLayer.css';

const PokemonLayer = () => {
  const selectPokemon = (state) => state.select;
  const pokemonData = useSelector(selectPokemon);

  if (!pokemonData) return <div className="layer"></div>

  const { id, name, image } = pokemonData;

  return (
    <div className="layer">
      <Pokemon id={id} name={name} image={image} />
    </div>
  )
}

export default PokemonLayer;