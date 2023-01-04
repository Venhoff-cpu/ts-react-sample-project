import React, {useState} from 'react';
import {TodoList} from "./components/TodoList";
import {NewTodo} from "./components/NewTodo";
import {Todo} from "./todo.models";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (todoText: string) => {
      const newTodo = {id: Math.random(), text: todoText}
      setTodos((prevState) => {
          return [...prevState, newTodo];
      })
  }

  const todoDeleteHandler = (todoId: number) => {
      setTodos(prevState => {
          return prevState.filter(todo => todoId !== todo.id)
      })
  }
  return (
    <div className="App">
      <NewTodo onSubmit={todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
