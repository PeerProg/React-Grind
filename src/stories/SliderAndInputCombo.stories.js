import React from 'react';
import SliderAndInputCombo from '../components/SliderAndInputCombo';

export default {
  title: 'Components/SliderAndInputCombo',
  component: SliderAndInputCombo,
};

const Template = (args) => {

  return (
    <SliderAndInputCombo {...args} />
    );
};

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 10
};
