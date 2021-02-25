import Form from 'components/Form';
import SignupForm from 'components/SignupForm';
import SignupFormHooks from 'components/SignupForm/SignupFormHooks';

import Signup from 'components/Form/Signup';

import styles from './Form.module.scss';

const FormPage = () => {
  const sayHello = () => console.log('Hello');

  const formSubmitHandler = data => {
    console.log(data);
  };

  return (
    <div className={styles.FormPageWrapper}>
      <h1>Form Page</h1>
      <Form sayHello={sayHello} />

      <div className={styles.SignupFormWrapper}>
        <SignupForm />
        <SignupFormHooks />
      </div>

      <div>
        <Signup onSubmitForm={formSubmitHandler} />
      </div>
    </div>
  );
};

export default FormPage;
