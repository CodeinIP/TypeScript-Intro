import axios from "axios";
import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
export interface TodoItem {
  id: number;
  title: string;
  status: boolean;
}
const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const getTodos = () => {
    axios
      .get("http://localhost:8080/todos")
      .then(({ data }: { data: TodoItem[] }) => setTodos(data))
      .catch((err) => console.log(err.message));
  };
  const addTodo = (value: string) => {
    if (value) {
      let payload = {
        id: todos.length + 1,
        title: value,
        status: false,
      };
      axios.post("http://localhost:8080/todos", payload).then(getTodos);
    }
  };
  const toggleTodo = (id: number, status: boolean) => {
    axios
      .patch(`http://localhost:8080/todos/${id}`, { status: !status })
      .then(getTodos);
  };
  const deleteTodo = (id: number) => {
    axios.delete(`http://localhost:8080/todos/${id}`).then(getTodos);
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="todo">
      <h2>Todo App</h2>
      <TodoInput addTodo={addTodo} />

      {todos.length > 0 &&
        todos?.map((todo) => (
          <TodoList
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
    </div>
  );
};

export default Todo;
