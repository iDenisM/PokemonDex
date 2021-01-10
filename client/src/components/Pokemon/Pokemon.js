import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import { useQuery, gql } from '@apollo/client';
import './Pokemon.css';

const GET_POKEMON = (id, name) => {
  return gql`
    {
      pokemon(id: "${id}", name: "${name}") {
        id
        name
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        classification
        types
        resistant
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
        weaknesses
        fleeRate
        maxCP
        evolutions {
          id
          name
        }
        evolutionRequirements {
          amount
          name
        }
        maxHP
        image
      }
    }
  `;
}

const Pokemon = ({ id, name, image }) => {
  const { loading, error, data } = useQuery(GET_POKEMON(id, name));
  const mode = loading ? 'loading' : '';

  if (loading) return template({pokemon: {
    id, name, image
  }}, mode);
  if (error) return <h2>Whoops... somthing went wrong!</h2>

  return template(data, mode);
}

const template = ({ pokemon }, mode) => (
  <div>
    <div className="pk__img">
      <Image src={pokemon.image} alt={pokemon.name} width={200} height={200} />
    </div>
    <div className="pk__name">{pokemon.name}</div>
    <div className={['pk__weight', mode].join(' ')}>
      <div className={['pk__weight--min', mode].join(' ')}>{pokemon.weight?.minimum}</div>
      <div className={['pk__weight--max', mode].join(' ')}>{pokemon.weight?.maximum}</div>
    </div>
    <div className={['pk__height', mode].join(' ')}>
      <div className={['pk__height--min', mode].join(' ')}>{pokemon.height?.minimum}</div>
      <div className={['pk__height--max', mode].join(' ')}>{pokemon.height?.maximum}</div>
    </div>    
  </div>
)

Pokemon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

Pokemon.defaultProps = {
  id: null,
  name: null,
  image: null
}

export default Pokemon;