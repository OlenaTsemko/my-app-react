// redux toolkit ========================================
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

const middleware = [...getDefaultMiddleware(), logger];
// распыляем дефолтные прослойки, и добавляем логгер

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
// подключаем дев тулзы только в режиме разработки, в продакшене их не будет

export default store;

// было до redux-toolkit ================================
// ======================================================
// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; // для девтулзов

// import counterReducer from './counter/counter-reducer';
// import todosReducer from './todos/todos-reducer';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todosReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
// ======================================================
// ======================================================

// const reducer = (state = {}, action) => state;
// // принимает предыдущеее состояние(state) и action(действие), возвращает следующее состояние

// ======================================================
// const initialState = {
//   counter: {
//     value: 0,
//     step: 3,
//   },
// };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + payload,
//         },
//       };

//     case 'counter/Decrement':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - payload,
//         },
//       };

//     default:
//       return state;
//   }
// };
// ======================================================

// Композиция редюсеров =================================
// const counterInitialState = {
//   value: 0,
//   step: 3,
// };

// const counterReducer = (state = counterInitialState, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         ...state,
//         value: state.value + payload,
//       };

//     case 'counter/Decrement':
//       return {
//         ...state,
//         value: state.value - payload,
//       };

//     default:
//       return state;
//   }
// };
