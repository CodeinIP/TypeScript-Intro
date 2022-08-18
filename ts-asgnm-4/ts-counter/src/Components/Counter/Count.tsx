import React from "react";
interface CountProps {
  count: number;
}
const Count = ({ count }: CountProps) => {
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Count;
