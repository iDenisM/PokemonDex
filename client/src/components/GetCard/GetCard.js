import React from 'react';
import Card from '../Card';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../../queries'

const GetCard = ({id, name}) => {
  const { loading, error, data } = useQuery(GET_POKEMON(id, name));

  if (loading) return <div>...Loading</div>
  if (error) return <div>Something went wrong</div>
  const botCard = { ...data.pokemon };
  console.log(botCard);
  return (
    <Card key={botCard.id} card={botCard} />
  )
}

export default GetCard;