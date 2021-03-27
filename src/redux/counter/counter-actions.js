// redux toolkit ========================================
import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counter/Increment');
export const decrement = createAction('counter/Decrement');

// было до redux-toolkit ================================
// import actionTypes from './counter-types';

// export const increment = value => ({
//   type: actionTypes.INCREMENT,
//   payload: value,
// });

// export const decrement = value => ({
//   type: actionTypes.DECREMENT,
//   payload: value,
// });

// ==============================================
// export const increment = value => ({
//   type: 'counter/Increment',
//   payload: value,
// });

// export const decrement = value => ({
//   type: 'counter/Decrement',
//   payload: value,
// });
