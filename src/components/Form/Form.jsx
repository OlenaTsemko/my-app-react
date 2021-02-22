import PropTypes from 'prop-types';

const Form = ({ sayHello }) => (
  <>
    <label htmlFor="someInput">
      <input type="text" id="someInput" />
    </label>
    <button onClick={sayHello}>Push me</button>
  </>
);

Form.propTypes = {
  sayHello: PropTypes.func.isRequired,
};

export default Form;
