import React from 'react';
import AccordionList from '../components/AccordionList';

export default {
  title: 'Components/AccordionList',
  component: AccordionList,
};

const Template = (args) => {

  return (
    <AccordionList {...args} />
    );
};

export const Default = Template.bind({});
