import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const initialState = {
  todoList: [
    { title: 'Create component', done: true, id: 1 },
    { title: 'Create state', done: false, id: 2 },
    { title: 'Cancel stuff', done: true, id: 3 },
    { title: 'Rule the world', done: false, id: 4 }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM_COMPLETION':
      const updatedTodoState = [...state.todoList].map(listItem => {
        if (listItem.id === action.id) {
          listItem.done = !listItem.done;
        }
        return listItem;
      });

      return { ...state, todoList: updatedTodoState };

    case 'ADD_NEW_ITEM':
      const updatedList = [...state.todoList, action.payload];

      return { ...state, todoList: updatedList };

    default:
      return state;
  }
};

const TodoList = () => {
  const [{ todoList }, dispatch] = useReducer(reducer, initialState);
  const [donePercentage, setDonePercentage] = useState(0);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  useEffect(() => {
    const numberOfDoneItems = todoList.filter(item => item.done).length;

    const percentageDone = (
      (numberOfDoneItems / todoList.length) *
      100
    ).toFixed(2);
    setDonePercentage(percentageDone);
  }, [todoList]);

  const toggleCompletion = id => {
    dispatch({ type: 'TOGGLE_ITEM_COMPLETION', id });
  };

  const executeAdd = () => {
    dispatch({
      type: 'ADD_NEW_ITEM',
      payload: {
        done: false,
        id: todoList.length + 1,
        title: newTodoTitle
      }
    });

    setNewTodoTitle('');
  };

  return (
    <StyledWrapper>
      <ProgressWrapper>
        <label htmlFor="percentage">{`${donePercentage}%`}</label>
        <StyledProgressElement
          id="percentage"
          value={donePercentage}
          max="100"
        />
      </ProgressWrapper>
      <input
        value={newTodoTitle}
        onChange={e => setNewTodoTitle(e.target.value)}
      />
      <button type="button" onClick={executeAdd}>
        Add
      </button>
      {todoList.map((listItem, idx) => (
        <TodoItem
          key={idx}
          todo={listItem}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </StyledWrapper>
  );
};

export default TodoList;

const StyledWrapper = styled.div``;

const ProgressWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  margin-bottom: 30px;
`;

const StyledProgressElement = styled.progress`
  margin-left: 10px;
`;
