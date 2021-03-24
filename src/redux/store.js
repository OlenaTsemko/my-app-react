import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// const reducer = (state = {}, action) => state;
// // принимает предыдущеее состояние(state) и action(действие), возвращает следующее состояние

const initialState = {
  counter: {
    value: 0,
    step: 3,
  },
};

const reducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case 'counter/Increment':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + payload,
        },
      };

    case 'counter/Decrement':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - payload,
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
