import React from "react";
import { useSelector } from "react-redux";

const Delete = () => {
  const toDo = useSelector((state) => state.todos.todos);
  const toDoOne = useSelector((state) => state.todo);

  console.log(toDo);
  console.log(toDoOne);
  //   const handleDelete = (event) => {};

  return (
    <div>
      <button>X</button>
    </div>
  );
};

export default Delete;
