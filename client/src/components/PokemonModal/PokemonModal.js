import React, { useState } from 'react';
import Pokemon from '../Pokemon';
import Modal from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { selectPokemonClick } from '../../actions'
import './PokemonModal.css';

const PokemonLayer = () => {
  const [isOpened, setIsOpened] = useState(false);
  const pokemonData = useSelector((state) => state.select);
  const dispatchClick = useDispatch();

  const toggleModal = () => {
    if (isOpened) dispatchClick(selectPokemonClick(null));
    setIsOpened(!isOpened)
  }

  if (pokemonData && !isOpened) toggleModal()
  if (!pokemonData && isOpened) toggleModal()

  return (
    <Modal addClass={['modal__pokemon']} show={isOpened} onClose={toggleModal}>
      {
        pokemonData && (
          <Pokemon 
            pokemonBase={pokemonData} 
          />
        )
      }
    </Modal>
  )
}

export default PokemonLayer;