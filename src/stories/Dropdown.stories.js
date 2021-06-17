import React, { useState } from 'react';

import Dropdown from '../components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown
};

const Template = args => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = e => {
    setSelectedOption(e.target.value);
    setShowOptions(false);
  };

  return (
    <Dropdown
      {...args}
      showOptions={showOptions}
      setShowOptions={setShowOptions}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      handleOptionClick={handleOptionClick}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeHolder: 'Select an option',
  options: [
    { label: 'Tangerine', value: 'Tangerine' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Potato', value: 'Potato' },
    { label: 'Banana', value: 'Banana' }
  ]
};
