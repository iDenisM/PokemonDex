import React from 'react';
import Pokemon from '../Pokemon';
import Modal from '../Modal';
import { useSelector } from 'react-redux';
import './PokemonModal.css';

const PokemonLayer = () => {
  const selectPokemon = (state) => state.select;
  const pokemonData = useSelector(selectPokemon);

  if (!pokemonData) return <Modal opened={false} />

  const { id, name, image } = pokemonData;

  return (
    <Modal opened={true}>
      <Pokemon id={id} name={name} image={image} />
    </Modal>
  )
}

export default PokemonLayer;