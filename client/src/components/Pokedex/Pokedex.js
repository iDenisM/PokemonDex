import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Button from '../Button';
import './Pokedex.css';

const ALL_POKEMONS = gql`
  {
    pokemons(first: 10){
      id
      name
      types
      image
    }
  }
`;

const Pokedex = () => {
  const { loading, error, data } = useQuery(ALL_POKEMONS);

  if (loading) return <p>Loading...</p>
  if (error) return <h2>Whoops... somthing went wrong!</h2>

  return (
    <div className="pokemons">
      {
        data.pokemons.map(p => (
          <div className="pokemon" key={p.id}>
            <Button addClass={['pokemon__btn']} onClick={() => {
              // Set the reducer for the active pokemon with the data of id, name, image
              console.log(p.name)
            }}>
              <img src={p.image} alt={p.name}></img>
            </Button>
            <div className="pokemon__name">{p.name}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Pokedex;