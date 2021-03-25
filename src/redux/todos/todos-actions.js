import shortid from 'shortid';
import actionTypes from './todos.types';

export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

export const deleteTodo = todoId => ({
  type: actionTypes.DELETE_TODO,
  payload: todoId,
});

export const toggleCompleted = todoId => ({
  type: actionTypes.TOGGLE_COMPLETED,
  payload: todoId,
});

export const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
