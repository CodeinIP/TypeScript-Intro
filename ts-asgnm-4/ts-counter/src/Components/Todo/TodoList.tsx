import React from "react";
import { IoIosDoneAll } from "react-icons/io";
import { MdRemoveDone } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { TodoItem } from "./Todo";
import "../../App.css";
interface TodoItemProps {
  id: number;
  title: string;
  status: boolean;
  toggleTodo: (id: number, status: boolean) => void;
  deleteTodo: (id: number) => void;
}
const TodoList = (props: TodoItemProps) => {
  const { id, status, title, toggleTodo, deleteTodo } = props;
  const style1 = { fontSize: "35px", background: "none", border: "none" };
  return (
    <div className="todoitem">
      <p
        style={
          status
            ? { textDecoration: "line-through", color: "lightgray" }
            : { color: "black" }
        }
      >
        {title}
      </p>
      <div>
        <button style={style1} onClick={() => toggleTodo(id, status)}>
          {status ? (
            <IoIosDoneAll color="green" />
          ) : (
            <MdRemoveDone color="red" fontSize="20px" />
          )}
        </button>
        <button style={style1}>
          <AiFillDelete color="red" onClick={() => deleteTodo(id)} />
        </button>
      </div>
    </div>
  );
};

export default TodoList;
