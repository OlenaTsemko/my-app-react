// redux toolkit ========================================
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as counterActions from './counter-actions';

const valueReducer = createReducer(0, {
  [counterActions.increment]: (state, { payload }) => state + payload,

  [counterActions.decrement]: (state, { payload }) => state - payload,
});

const stepReducer = (state = 1, _) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});

// было до redux-toolkit ================================
// import { combineReducers } from 'redux';
// import actionTypes from './counter-types';

// // еще больше дробим редюсер
// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case actionTypes.INCREMENT:
//       return state + payload;

//     case actionTypes.DECREMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };

// const stepReducer = (state = 1, action) => state;

// export default combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

// ==================================================
// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });
