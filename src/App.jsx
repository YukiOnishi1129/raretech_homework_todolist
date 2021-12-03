/**
 * App
 * @package src
 */
import React from "react";
/* components */
import { InputArea } from "./components/InputArea";
import { TodoArea } from "./components/TodoArea";
/* hooks */
import { useApp } from "./hooks/useApp"; /* styles */
import "./CSS/style.scss";

/**
 * App
 * @returns
 */
export const App = () => {
  /* hooks */
  const [states, actions] = useApp();

  return (
    <>
      <h1 className="title">Todo List</h1>
      <h2 className="sub-title">ADD TODO</h2>
      <div className="wrapper">
        <InputArea
          inputTodo={states.inputTodo}
          onChange={actions.onChangeInputTodo}
          onKeyPress={actions.pressEnter}
          placeholder="New Todo"
        />
        <InputArea
          inputTodo={states.searchKeyword}
          onChange={actions.onChangeSearchTodo}
          placeholder="Search Todo"
        />
        <TodoArea todos={states.todos} onClickDelete={actions.onClickDelete} />
      </div>
    </>
  );
};
