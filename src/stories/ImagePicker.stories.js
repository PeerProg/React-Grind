import React from 'react';
import ImagePicker from '../components/ImagePicker';

export default {
  title: 'Components/ImagePicker',
  component: ImagePicker,
};

const Template = (args) => {

  return (
    <ImagePicker {...args} />
    );
};

export const Default = Template.bind({});
