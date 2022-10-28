import React, { useState } from "react";
import { createTodo } from "../store/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateTodo = () => {
  const [taskName, setTaskName] = useState("");
  const [assignee, setAssignee] = useState("");

  const created = useSelector((state) => state.todos);
  // console.log(createToDo);

  const dispatch = useDispatch("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data: created } = await axios.post("/api/todos", {
      taskName,
      assignee,
    });
    dispatch(createTodo(created));
    navigate("/");
  };

  const handleTaskChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAssignee = (event) => {
    setAssignee(event.target.value);
  };

  // dispatch(createToDo({taskName, assignee}));

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="taskName">Task Name:</label>
      <input name="taskName" value={taskName} onChange={handleTaskChange} />

      <label htmlFor="assignee">Assign To:</label>
      <input name="assignee" value={assignee} onChange={handleAssignee} />

      <button type="submit">Submit</button>
      <Link to="/">Cancel</Link>
    </form>
  );
};

export default CreateTodo;
