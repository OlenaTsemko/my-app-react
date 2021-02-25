import { useState } from 'react';

import Controls from '../Controls';
import Value from '../Value';

import styles from '../Counter.module.scss';

const CounterHooks = () => {
  const [initialValue, setInitialValue] = useState(0);

  const handleIncrement = () =>
    setInitialValue(previnitialValue => previnitialValue + 1);

  const handleDecrement = () =>
    setInitialValue(previnitialValue => previnitialValue - 1);

  return (
    <div className={styles.Counter}>
      <h2>Counter with Hooks</h2>
      <Value value={initialValue} />
      <Controls onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
};

export default CounterHooks;
