import React from 'react';
import Pokedex from '../components/Pokedex'

export default {
  title: 'Example/Pokedex',
  component: Pokedex
};

const Template = (args) => <Pokedex {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
