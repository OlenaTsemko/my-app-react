import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // для девтулзов

import counterReducer from './counter/counter-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// const reducer = (state = {}, action) => state;
// // принимает предыдущеее состояние(state) и action(действие), возвращает следующее состояние

// =======================================================================
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
// ==================================================================

// Композиция редюсеров =========================================
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
