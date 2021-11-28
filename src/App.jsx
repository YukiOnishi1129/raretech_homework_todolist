import React, { useState } from "react";

import { InputArea } from "./components/InputArea";
import { TodoArea } from "./components/TodoArea";

import "./CSS/style.scss";

export const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);

  const onChangeInputTodo = (event) => setInputTodo(event.target.value);

  const pressEnter = (event) => {
    if (event.key === "Enter") {
      // 空文字もしくはスペースのみのときは処理を抜ける
      if (inputTodo === "" || !inputTodo.match(/\S/g)) return;

      const newTodos = [...todos, inputTodo];
      setTodos(newTodos);
      setInputTodo("");
    }
  };

  const onClickDelete = (index) => {
    const deletedTodos = [...todos];
    deletedTodos.splice(index, 1);
    setTodos(deletedTodos);
  };

  return (
    <>
      <h1 className="title">Todo List</h1>
      <h2 className="sub-title">ADD TODO</h2>
      <div className="wrapper">
      <InputArea
        inputTodo={inputTodo}
        onChange={onChangeInputTodo}
        onKeyPress={pressEnter}
      />
      <TodoArea todos={todos} onClickDelete={onClickDelete} />
      </div>
    </>
  );
};
