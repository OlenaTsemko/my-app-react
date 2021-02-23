import PropTypes from 'prop-types';

import styles from './TodoList.module.scss';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className={styles.TodoList}>
    {todos.map(({ id, text }) => (
      <li key={id} className={styles.TodoListItem}>
        <p className={styles.TodoListText}>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

export default TodoList;
