import React, { Component } from 'react';
import styles from './SignupForm.module.scss';

class SignupForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className={styles.form} autoComplete="off">
        <h2>Форма с использованием классов</h2>
        <label className={styles.label}>
          <span>Почта</span>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>

        <label className={styles.label}>
          <span>Пароль</span>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    );
  }
}

export default SignupForm;
