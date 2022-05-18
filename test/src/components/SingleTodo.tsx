import React from "react";
import { Todo } from "../model";
import {
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";
import { MdDone } from "react-icons/md";

import "./styles.css";
import TodoList from "./TodoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<
    React.SetStateAction<Array<Todo>>
  >;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isDone: !todo.isDone }
          : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id))
  }

  return (
    <form className="todos__single">
      {todo.isDone ? (
        <span className="todos__single--text">{todo.todo}</span>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      
      <div>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
