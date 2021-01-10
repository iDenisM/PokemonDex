import React from 'react';
import Search from '../components/Search'

export default {
  title: 'Example/Search',
  component: Search
};

const Template = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
