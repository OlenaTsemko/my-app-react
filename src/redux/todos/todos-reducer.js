import { combineReducers } from 'redux';
import actionTypes from './todos.types';

import initialTodos from 'data/todos.json';

const itemsReducer = (state = initialTodos, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO:
      return [payload, ...state];

    case actionTypes.DELETE_TODO:
      return state.filter(({ id }) => id !== payload);

    case actionTypes.TOGGLE_COMPLETED:
      return state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      );

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
