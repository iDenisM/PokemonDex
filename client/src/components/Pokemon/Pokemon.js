import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import Button from '../Button';
import RadioInput from '../RadioInput';
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

const Pokemon = (pokemonBase) => {
  const { id, name, image } = pokemonBase.pokemonBase;
  const [fastAttack, setFastAttack] = useState(null);
  const [specialAttack, setSpecialAttack] = useState(null);
  const [warningSlection, setWarningSlection] = useState(false);
  const { loading, error, data } = useQuery(GET_POKEMON(id, name));
  const mode = loading ? 'loading' : '';
  const fastGrpId = 'fast-grp';
  const specialGrpId = 'special-grp';
  let pokemonData = { id, name, image };

  if (data) pokemonData = { ...data.pokemon };
  if (error) return <h2>Whoops... somthing went wrong!</h2>

  const { 
    weight, classification,
    types, height, attacks } = pokemonData;

  const selectPokemon = () => {
    if (fastAttack && specialAttack) {
      // SET REDUCER WITH POKEMON DATA
      return true;
    }
    setWarningSlection(true);
    setTimeout(() => {
      setWarningSlection(false);
    }, 1500);
  }

  const attackChanged = (attackName, attackType) => {
    if (attackType === 'fast') {
      return setFastAttack(attackName);
    }
    return setSpecialAttack(attackName);
  }

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
        <form className="pk__attack">
          <fieldset>
            <legend className="is-vHidden">Choose your attack</legend>
            <div className="pk__attack__header">Attacks:</div>
            {
              attacks?.fast?.length && (
                <fieldset className="pk__attack__type">
                  <legend className="is-vHidden">Fast attack</legend>
                  <div className="pk__attack__name">Fast</div>
                  <div id={fastGrpId} className="pk__attack__group">
                    {
                      attacks.fast.map(({ name, type, damage }, i) => (
                        <RadioInput 
                          key={i} 
                          id={`${fastGrpId}-${i}`} 
                          value={name} 
                          group={fastGrpId}
                          addClass={['pk__attack__variant']}
                          onChange={() => {
                            attackChanged(name, 'fast')
                          }}
                        >
                          <span className="name">{name}</span>
                          <span className="type">{type}</span>
                          <span className="damage">Dmg: {damage}</span>
                        </RadioInput>
                      ))
                    }
                  </div>
                </fieldset>
              )
            }
            {
              attacks?.special?.length && (
                <fieldset className="pk__attack__type">
                  <legend className="is-vHidden">Special attack</legend>
                  <div className="pk__attack__name">Special</div>
                  <div id={specialGrpId} className="pk__attack__group">
                    {
                      attacks.special.map(({ name, type, damage }, i) => (
                        <RadioInput 
                          key={i} 
                          id={`${specialGrpId}-${i}`} 
                          value={name} 
                          group={specialGrpId}
                          addClass={['pk__attack__variant']}
                          onChange={() => {
                            attackChanged(name, 'special')
                          }}
                        >
                          <span className="name">{name}</span>
                          <span className="type">{type}</span>
                          <span className="damage">Dmg: {damage}</span>
                        </RadioInput>
                      ))
                    }
                  </div>
                </fieldset>
              )
            }
          </fieldset>
        </form>
      </main>
      <footer className="pk__footer">
        <div className={['pk__warning', warningSlection ? 'pk__warning--open' : ''].join(' ')}>
          Please select one Fast and one Special attacksf
          </div>
        <Button addClass={['pk__select']} onClick={selectPokemon}>
          <span className="text">Pick this pokemon</span>
        </Button>
      </footer>
    </article>
  )
}


Pokemon.propTypes = {
  pokemonBase: PropTypes.object
}

Pokemon.defaultProps = {
  pokemonBase: null
}

export default Pokemon;