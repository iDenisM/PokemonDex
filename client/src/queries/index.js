import { gql } from '@apollo/client';

export const ALL_POKEMONS = (number) => {
  return gql`
  {
    pokemons(first: ${number}){
      id
      name
      types
      image
      maxCP
    }
  }
`;
}

export const GET_POKEMON = (id, name) => {
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