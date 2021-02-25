import { useState } from 'react';

import styles from '../SignupForm.module.scss';

const SignupFormHooks = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  //   const HandleEmailChange = event => {
  //     setEmail(event.target.value);
  //   };

  //   const HandlePasswordChange = event => {
  //     setPassword(event.target.value);
  //   };

  return (
    <form className={styles.form} autoComplete="off">
      <h2>Форма с использованием хуков</h2>
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default SignupFormHooks;
