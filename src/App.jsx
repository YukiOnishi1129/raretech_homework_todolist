import React from 'react';
import trashCan from "./images/trash_can.svg";

export const App = () => {

  return (
    <>
      <p>Todo List</p>
      <div>
        <p>ADD TODO</p>
        <input type="text" placeholder="New Todo" />
      </div>
      <div>
        <ul>
          <div>
            <li>Todo1</li>
            <input type="image" src={trashCan} alt="削除" />
          </div>
          <div>
            <li>Todo2</li>
            <input type="image" src={trashCan} alt="削除" />
          </div>
        </ul>
      </div>
    </>
  );
};
