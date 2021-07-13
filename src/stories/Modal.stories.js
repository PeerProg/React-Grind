import React from 'react';
import Modal from '../components/Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = (args) => {

  return (
    <Modal {...args} />
    );
};

export const Default = Template.bind({});