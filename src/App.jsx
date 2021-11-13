import React, { useState } from "react";
import trashCan from "./images/trash_can.svg";

export const App = () => {
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);

  return (
    <>
      <p>Todo List</p>
      <div>
        <p>ADD TODO</p>
        <input type="text" placeholder="New Todo" />
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
