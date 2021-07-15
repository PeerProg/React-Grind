import React from 'react';
import Timer from '../components/Timer';

export default {
  title: 'Components/Timer',
  component: Timer,
};

const Template = (args) => {

  return (
    <Timer {...args} />
    );
};

export const Default = Template.bind({});