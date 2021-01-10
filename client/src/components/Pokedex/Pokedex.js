import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Button from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import { selectClick } from '../../actions'
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
  const dispatchClick = useDispatch();
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
              const value = {
                id: p.id,
                name: p.name,
                image: p.image
              }
              dispatchClick(selectClick(value));
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