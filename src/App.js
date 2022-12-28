import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const todos = [
  { text: 'Cortar cebolla',
    completed: false
  },
  { text: 'Tomar curso de Intro a React',
    completed: true
  },
  { text: 'Tipear en MonkeyType',
    completed: false
  },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        { todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
          )) }
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
