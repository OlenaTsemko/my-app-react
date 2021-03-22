import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TodoList.module.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
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

          <button
            className={styles.TodoList__btn}
            onClick={() => onDeleteTodo(id)}
          >
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

export default TodoList;
