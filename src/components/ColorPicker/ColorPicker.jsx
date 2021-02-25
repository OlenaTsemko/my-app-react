import React, { Component } from 'react';
import styles from './ColorPicker.module.scss';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    // const optionClasses = [styles.ColorPicker__option];

    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push(styles.active);
    // }

    // return optionClasses.join(' ');

    return index === this.state.activeOptionIdx
      ? styles.activeOption
      : styles.option;
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className={styles.ColorPicker}>
        <h2 className={styles.ColorPickerTitle}>Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
