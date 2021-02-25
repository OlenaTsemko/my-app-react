import Counter from 'components/Counter';
import CounterHooks from 'components/Counter/CounterHooks';
import Dropdown from 'components/Dropdown';

const CounterPage = () => (
  <>
    <h1>Counter</h1>
    <Counter initialValue={0} />

    <CounterHooks />

    <Dropdown />
  </>
);

export default CounterPage;
