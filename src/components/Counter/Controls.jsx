import styles from './Counter.module.scss';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={styles.CounterControls}>
    <button type="button" onClick={onIncrement}>
      Увеличить на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
  </div>
);

export default Controls;
