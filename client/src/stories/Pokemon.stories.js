import React from 'react';
import Pokemon from '../components/Pokemon'

export default {
  title: 'Example/Pokemon',
  component: Pokemon
};

const Template = (args) => <Pokemon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'UG9rZW1vbjowMDM=',
  name: 'Venusaur',
  image: 'https://img.pokemondb.net/artwork/venusaur.jpg'
};
