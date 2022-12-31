import React from "react";

function useLocalStorage(itemName) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (localStorageItem === "[]" || !localStorageItem) {
          const firstItem = {
            text: "Crear una tarea",
            completed: false,
          };

          parsedItem = [firstItem];

          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 400);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    todos: item,
    saveTodos: saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
