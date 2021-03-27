import { connect } from 'react-redux';

const Stats = ({ totalTodo, completedTodos }) => (
  <div>
    <p>Общее количество: {totalTodo}</p>
    <p>количество выполненных: {completedTodos}</p>
  </div>
);

const calculateCompletedTodos = todos =>
  todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);

const mapStateToProps = state => ({
  totalTodo: state.todos.items.length,
  completedTodos: calculateCompletedTodos(state.todos.items),
});

export default connect(mapStateToProps)(Stats);
