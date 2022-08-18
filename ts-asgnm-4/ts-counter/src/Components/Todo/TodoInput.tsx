import React, { useState } from "react";
import "../../App.css";
interface InputProps {
  addTodo: (value: string) => void;
}
const TodoInput = ({ addTodo }: InputProps) => {
  const [title, setTitle] = useState<string>("");
  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <input className="input" type="text" onChange={inputHandler} />
      <button className="button" onClick={() => addTodo(title)}>
        +
      </button>
    </>
  );
};

export default TodoInput;
