import Form from 'components/Form';

const FormPage = () => {
  const sayHello = () => console.log('Hello');

  return (
    <>
      <h1>Form Page</h1>
      <Form sayHello={sayHello} />
    </>
  );
};

export default FormPage;
