import { Component } from 'react';

import TodoList from 'components/Todos/TodoList';
import TodoEditor from 'components/Todos/TodoEditor';
import Filter from 'components/Todos/Filter';

class TodoListPage extends Component {
  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    // const totalTodo = todos.length;
    // const completedTodos = this.calculateCompletedTodos();

    return (
      <>
        <h1>Todo List Redux</h1>
        {/* 
        <div>
          <p>Общее количество: {totalTodo}</p>
          <p>количество выполненных: {completedTodos}</p>
        </div> */}

        <TodoEditor />
        <Filter />
        <TodoList />
      </>
    );
  }
}

export default TodoListPage;
