import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { connect } from 'react-redux';
import * as todosActions from 'redux/todos/todos-actions';

import styles from './TodoList.module.scss';

const TodoList = ({ todos, onDelete, onToggleCompleted }) => {
  const s = classNames.bind(styles);

  return (
    <ul className={styles.TodoList}>
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={s('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <label className={styles.TodoList__label}>
            <input
              type="checkbox"
              className="TodoList__checkbox"
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />

            <p className={styles.TodoList__text}>{text}</p>
          </label>

          <button className={styles.TodoList__btn} onClick={() => onDelete(id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

// селектор
const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

// const mapStateToProps = state => {
//   const { items, filter } = state.todos;
//   const visibleTodos = getVisibleTodos(items, filter);

//   return {
//     todos: visibleTodos,
//   };
// };

const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodos(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: todoId => dispatch(todosActions.deleteTodo(todoId)),
  onToggleCompleted: todoId => dispatch(todosActions.toggleCompleted(todoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
