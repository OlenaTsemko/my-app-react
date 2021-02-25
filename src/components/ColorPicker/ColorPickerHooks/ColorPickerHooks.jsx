import { useState } from 'react';
import styles from '../ColorPicker.module.scss';

const ColorPickerHooks = ({ options }) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOptionClassName = index =>
    index === activeOptionIdx ? styles.activeOption : styles.option;

  const { label } = options[activeOptionIdx];

  return (
    <div className={styles.ColorPicker}>
      <h2 className={styles.ColorPickerTitle}>Color Picker Hooks</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPickerHooks;
