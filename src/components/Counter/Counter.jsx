// с использованием хуков
import { useSelector, useDispatch } from 'react-redux';

import Controls from './Controls';
import Value from './Value';

import * as counterActions from 'redux/counter/counter-actions';

import styles from './Counter.module.scss';

// не нужно передавать пропсы и использовать connect
const Counter = () => {
  const value = useSelector(state => state.counter.value); // useSelector используем вместо mapStateToProps
  const step = useSelector(state => state.counter.value);

  const dispatch = useDispatch(); // создаем диспатч, чтоб использовать его в onIncrement и onDecrement
  const increment = () => dispatch(counterActions.increment(step)); // заменяет mapDispatchToProps
  const decrement = () => dispatch(counterActions.decrement(step));

  return (
    <div className={styles.Counter}>
      <h2>Counter with Redux</h2>
      <Value value={value} />
      <Controls step={step} onIncrement={increment} onDecrement={decrement} />
    </div>
  );
};

export default Counter;

// import { connect } from 'react-redux';
// import Controls from './Controls';
// import Value from './Value';
// import * as counterActions from 'redux/counter/counter-actions';
// import styles from './Counter.module.scss';

// // в пропсы value и step пришли из mapStateToProps, методы onIncrement и onDecrement пришли из mapDispatchToProps
// const Counter = ({ value, step, onIncrement, onDecrement }) => (
//   <div className={styles.Counter}>
//     <h2>Counter with Redux</h2>

//     <Value value={value} />

//     <Controls
//       step={step}
//       onIncrement={() => onIncrement(step)}
//       onDecrement={() => onDecrement(step)}
//     />
//   </div>
// );

// // Добавляет со стейта в пропсы
// const mapStateToProps = state => ({
//   value: state.counter.value,
//   step: state.counter.step,
// });

// передать методы для отправки actions
// const mapDispatchToProps = dispatch => ({
//   onIncrement: value => dispatch(counterActions.increment(value)),
//   onDecrement: value => dispatch(counterActions.decrement(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
