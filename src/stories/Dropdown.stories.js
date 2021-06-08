import React from 'react';

import Dropdown from '../components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleOptionClick: () => {},
  showOptions: () => {},
  setShowOptions: () => {},
  placeHolder: () => {},
  selectedOption: () => {},
  options: [
    { label: 'Tangerine', value: 'Tangerine' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Potato', value: 'Potato' },
    { label: 'Banana', value: 'Banana' }
  ]
};
