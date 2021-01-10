import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import Button from '../Button';
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

const template = ({ pokemon }, mode) => {
  const { 
    name, image, weight, classification,
    types, height, attacks } = pokemon;

  return (
    <article className="pk">
      <header className="pk__name">{name}</header>
      <div className="pk__img">
        <Image src={image} alt={name} width={200} height={200} />
      </div>
      <main className="pk__desc">
        <div className="pk__desc__header">Characteristics</div>
        <div className="pk__content pk__class">{classification}</div>
        <div className="pk__content pk__types">
          <div className="pk__types__header">Types</div>
          {
            types?.map((type, i) => (
              <div key={i}>{type}</div>
            ))
          }
        </div>
        <div className={['pk__content', 'pk__weight', mode].join(' ')}>
          <div className='pk__content__header'>Weight:</div>
          <div className={['pk__weight--min', mode].join(' ')}>
            <span className="name">Min</span>
            <span className="value">{weight?.minimum}</span>
          </div>
          <div className={['pk__weight--max', mode].join(' ')}>
            <span className="name">Max</span>
            <span className="value">{weight?.maximum}</span>
          </div>
        </div>
        <div className={['pk__content', 'pk__height', mode].join(' ')}>
          <div className="pk__content__header">Height:</div>
          <div className={['pk__height--min', mode].join(' ')}>
            <span className="name">Min</span>
            <span className="value">{height?.minimum}</span>
          </div>
          <div className={['pk__height--max', mode].join(' ')}>
            <span className="name">Max</span>
            <span className="value">{height?.maximum}</span>
          </div>
        </div>    
        <div className="pk__attack">
          <div className="pk__attack__header">Attacks:</div>
          <div className="pk__attack__type">
            <div className="pk__attack__name">Fast</div>
            {
              attacks?.fast?.map((a, i) => attackType(a, i))
            }
          </div>
          <div className="pk__attack__type">
            <div className="pk__attack__name">Special</div>
            {
              attacks?.special?.map((a, i) => attackType(a, i))
            }
          </div>
        </div>
      </main>
      <footer className="pk__footer">
        <Button addClass={['pk__select']}>
          <span className="text">Pick this pokemon</span>
        </Button>
      </footer>
    </article>
  )
};

const attackType = (attack, key) => {
  const { name, type, damage } = attack;
  return (
    <Button key={key} addClass={['pk__attack__variant']}>
      <span className="name">{name}</span>
      <span className="type">{type}</span>
      <span className="damage">{damage} dmg</span>
    </Button>
  )
}


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