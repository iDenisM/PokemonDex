import React from 'react';

const Pokedex = ({ pokemons }) => {
  if (!pokemons.length) return <p>No pokemons found</p>

  return (
    <p>We found these pokemons</p>
  )
}

export default Pokedex;