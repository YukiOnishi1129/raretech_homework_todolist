import React, { useState } from "react";
import trashCan from "./images/trash_can.svg";

export const App = () => {
  const [inputTodo,setInputTodo] = useState("");
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);

  const onChangeInputTodo = (event) => setInputTodo(event.target.value);

  const pressEnter = (event) => {
    if (event.key === 'Enter'){
      console.log(inputTodo)
      setInputTodo("")
    }
  }

  return (
    <>
      <p>Todo List</p>
      <div>
        <p>ADD TODO</p>
        <input type="text" placeholder="New Todo" value={inputTodo} onChange={onChangeInputTodo} onKeyPress={pressEnter}/>
      </div>
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <div key={todo}>
                <li>{todo}</li>
                <input type="image" src={trashCan} alt="削除" />
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
