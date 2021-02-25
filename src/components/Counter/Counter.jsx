import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Controls from './Controls';
import Value from './Value';

import styles from './Counter.module.scss';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  static propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };

  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  // }

  // если мало свойств записываем так:
  state = {
    value: this.props.initialValue,
  };

  // чтоб this был привязан без bind, передаем публичное свойство (стрелочную ф-ю)
  handleIncrement = event => {
    // console.log('Increment button was clicked!', event); // работает
    // console.log('this.props: ', this.props); // работает
    // setTimeout(() => {
    //   console.log(event.target);
    // }, 1000); // уже работает, пофиксили

    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = event => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  // обязательный метод, который возвращает разметку компонента
  render() {
    const { value } = this.state;

    return (
      <div className={styles.Counter}>
        <h2>Counter with Class</h2>
        <Value value={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
