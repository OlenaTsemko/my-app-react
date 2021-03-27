import TodoList from 'components/Todos/TodoList';
import TodoEditor from 'components/Todos/TodoEditor';
import Filter from 'components/Todos/Filter';
import Stats from 'components/Todos/Stats';

const TodoListPage = () => (
  <>
    <h1>Todo List Redux</h1>
    <Stats />

    <TodoEditor />
    <Filter />
    <TodoList />
  </>
);

export default TodoListPage;
