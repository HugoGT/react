import React from "react";
import "./css/TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos }) {

	return (
		<h2 className="TodoCounter">
			Has completado {completedTodos} de {totalTodos} TODOs
		</h2>
	);
}

export { TodoCounter };
