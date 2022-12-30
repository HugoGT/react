import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoContext, TodoProvider } from "./components/TodoContext";

function App() {
  return (
    <TodoProvider>
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />

        <TodoContext.Consumer>
          {({
            error,
            loading,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
          }) => (
            <TodoList>
              {error && <p>Desepérate, hubo un error</p>}
              {loading && <p>Estamos cargando, no desesperes...</p>}

              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => {
                    toggleCompleteTodo(todo.text);
                  }}
                  onDelete={() => {
                    deleteTodo(todo.text);
                  }}
                />
              ))}
            </TodoList>
          )}
        </TodoContext.Consumer>

        <CreateTodoButton />
      </React.Fragment>
    </TodoProvider>
  );
}

export default App;
