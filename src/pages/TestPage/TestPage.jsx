import NewComponent from 'components/NewComponent';
import Header from 'components/Header';

const TestPage = () => {
  const headerTitle = 'Hello from React';

  return (
    <>
      <Header title={headerTitle} />

      <NewComponent>
        <h2>I'm children</h2>
      </NewComponent>
    </>
  );
};

export default TestPage;
