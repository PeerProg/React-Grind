import React from 'react';
import SideBarWithIconsAndText from '../components/SideBarWithIconsAndText';

export default {
  title: 'Components/SideBarWithIconsAndText',
  component: SideBarWithIconsAndText,
};

const Template = (args) => {

  return (
    <SideBarWithIconsAndText {...args} />
    );
};

export const Default = Template.bind({});