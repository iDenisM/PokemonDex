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

  if (!pokemonData) return null;
  if (!isOpened) toggleModal()
  const { id, name, image } = pokemonData;

  console.log(isOpened);

  return (
    <Modal show={isOpened} onClose={toggleModal}>
      <Pokemon id={id} name={name} image={image} />
    </Modal>
  )
}

export default PokemonLayer;