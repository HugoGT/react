import './css/CreateTodoButton.css';

function CreateTodoButton(props) {
  const clickButton = () => {
    alert('Aquí va tu modal')
  }
  return (
    <button
      className="CreateTodoButton"
      onClick={clickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
