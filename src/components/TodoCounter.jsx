import React from 'react';
import './css/TodoCounter.css';
import { TodoContext } from './TodoContext';

function TodoCounter() {
  const { total: totalTodos, completed: completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };
