import React from "react";
import "../../App.css";
interface ButtonProps {
  label: string;
  handleCount: () => void;
}
const Button = ({ label, handleCount }: ButtonProps) => {
  return (
    <>
      <button className="button" onClick={handleCount}>{label}</button>
    </>
  );
};

export default Button;
