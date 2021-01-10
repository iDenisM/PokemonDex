import { useState } from 'react';
import Pokemon from '../Pokemon';
import Modal from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { selectClick } from '../../actions'
import './PokemonModal.css';

const PokemonLayer = () => {
  const [isOpened, setIsOpened] = useState(false);
  const selectPokemon = (state) => state.select;
  const pokemonData = useSelector(selectPokemon);
  const dispatchClick = useDispatch();

  const toggleModal = () => {
    if (isOpened) dispatchClick(selectClick(null));
    setIsOpened(!isOpened)
  }

  if (pokemonData && !isOpened) toggleModal()

  return (
    <Modal addClass={['modal__pokemon']} show={isOpened} onClose={toggleModal}>
      {
        pokemonData && (
          <Pokemon id={pokemonData.id} name={pokemonData.name} image={pokemonData.image} />
        )
      }
    </Modal>
  )
}

export default PokemonLayer;