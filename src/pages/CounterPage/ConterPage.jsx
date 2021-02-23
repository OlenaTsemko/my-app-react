import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';

const CounterPage = () => (
  <>
    <h1>Counter</h1>
    <Counter initialValue={0} />

    <Dropdown />
  </>
);

export default CounterPage;
