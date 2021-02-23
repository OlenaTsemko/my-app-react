import React, { Component } from 'react';
import TodoList from 'components/TodoList';
import initialTodos from 'data/todos.json';

class TodoListPage extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodo = todos.length;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <>
        <h1>Todo List</h1>

        <div>
          <p>Общее количество: {totalTodo}</p>
          <p>количество выполненных: {completedTodos}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default TodoListPage;
