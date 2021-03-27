// redux toolkit ========================================
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as todosActions from './todos-actions'; // типы берутся с actions

import initialTodos from 'data/todos.json';

const itemsReducer = createReducer(initialTodos, {
  [todosActions.addTodo]: (state, { payload }) => [payload, ...state],

  [todosActions.deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [todosActions.toggleCompleted]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
});

const filterReducer = createReducer('', {
  [todosActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// было до redux-toolkit ================================
// ======================================================
// import { combineReducers } from 'redux';
// import actionTypes from './todos.types';

// import initialTodos from 'data/todos.json';

// const itemsReducer = (state = initialTodos, { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD_TODO:
//       return [payload, ...state];

//     case actionTypes.DELETE_TODO:
//       return state.filter(({ id }) => id !== payload);

//     case actionTypes.TOGGLE_COMPLETED:
//       return state.map(todo =>
//         todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
//       );

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });
// ======================================================
// ======================================================
