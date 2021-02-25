import NewComponent from 'components/NewComponent';
import Header from 'components/Header';
import ColorPicker from 'components/ColorPicker';
import ColorPickerHooks from 'components/ColorPicker/ColorPickerHooks';

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

      <ColorPickerHooks options={colorPickerOptions} />
    </>
  );
};

export default TestPage;
