import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Button from '../Button';
import { useSelector } from 'react-redux';
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
  const selectSearchProduct = (state) => state.textSearch;
  const textSearch = useSelector(selectSearchProduct);

  if (loading) return <p>Loading...</p>
  if (error) return <h2>Whoops... somthing went wrong!</h2>

  const filterMap = {
    All: () => true,
    Filtered: (pokemon) => pokemon.name.toLocaleLowerCase().includes(textSearch)
  }

  const task = textSearch ? 'Filtered' : 'All';

  return (
    <div className="pokemons">
      {
        data.pokemons.filter(filterMap[task]).map(p => (
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