import React from "react";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoCounter } from "./components/TodoCounter";
import { CreateTodoButton } from "./components/CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar curso de Intro a React", completed: true },
  { text: "Tipear en MonkeyType", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const toggleCompleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);

    newTodos[todoIndex].completed = !todos[todoIndex].completed
    setTodos(newTodos)
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);

    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  };

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {toggleCompleteTodo(todo.text)}}
            onDelete={() => {deleteTodo(todo.text)}}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
