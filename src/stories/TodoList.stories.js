import React from 'react';
import TodoList from '../components/TodoList';

export default {
  title: 'Components/TodoList',
  component: TodoList
};

const Template = args => {
  return <TodoList {...args} />;
};

export const Default = Template.bind({});
