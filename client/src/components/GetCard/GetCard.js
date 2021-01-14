import React from 'react';
import Card from '../Card';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../../queries'
import Engine from '../../Engine';

const GetCard = ({ id, name }) => {
  const { loading, error, data } = useQuery(GET_POKEMON(id, name));
  
  if (loading) return <div>...Loading</div>
  if (error) return <div>Something went wrong</div>
  const botCard = { ...data.pokemon };
  Engine.addBotCard(botCard);

  return (
    <Card key={botCard.id} card={botCard} />
  )
}

export default GetCard;