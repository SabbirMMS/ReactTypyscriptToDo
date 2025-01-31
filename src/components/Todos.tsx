import { useTodos } from "../store/ToDos";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDelete } = useTodos();
  const [searchParams] = useSearchParams();
  const todosData: string | null = searchParams.get("todos");
  
  let filterData = todos;

    if (todosData === "active") {
        filterData = todos.filter((todo) => !todo.completed);
    } else if (todosData === "completed") {
        filterData = todos.filter((todo) => todo.completed);
    }

  return (
    <ul className="main-task">
      {filterData.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.completed && (
              <button type="button" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
      {/* Add filter functionality here */}
    </ul>
  );
};

export default Todos;
