import NewComponent from 'components/NewComponent';
import Header from 'components/Header';
import ColorPicker from 'components/ColorPicker';

import colorPickerOptions from 'data/colorPicker.json';

const TestPage = () => {
  const headerTitle = 'Hello from React';

  return (
    <>
      <Header title={headerTitle} />

      <NewComponent>
        <h2>I'm children</h2>
      </NewComponent>

      <ColorPicker options={colorPickerOptions} />
    </>
  );
};

export default TestPage;
