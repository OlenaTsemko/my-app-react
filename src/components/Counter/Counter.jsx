import { connect } from 'react-redux';

import Controls from './Controls';
import Value from './Value';

import * as actions from 'redux/actions';

import styles from './Counter.module.scss';

// в пропсы value и step пришли из mapStateToProps, методы onIncrement и onDecrement пришли из mapDispatchToProps
const Counter = ({ value, step, onIncrement, onDecrement }) => (
  <div className={styles.Counter}>
    <h2>Counter with Redux</h2>

    <Value value={value} />

    <Controls
      step={step}
      onIncrement={() => onIncrement(step)}
      onDecrement={() => onDecrement(step)}
    />
  </div>
);

// Добавляет со стейта в пропсы
const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

// передать методы для отправки actions
const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
