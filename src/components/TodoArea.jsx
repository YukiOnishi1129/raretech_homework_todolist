import React from "react";

import trashCan from "../images/trash_can.svg";

export const TodoArea = (props) => {
  const { todos, onClickDelete } = props;

  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              {/* 引数を渡した関数をonClickに指定すると画面がレンダリングされた際にonClickイベントが発火してしまうためアロー関数にして指定する */}
              <button>
                <img
                  onClick={() => onClickDelete(index)}
                  src={trashCan}
                  alt="削除"
                />
              </button>
              {/* <input type="image" src={trashCan} alt="削除" /> */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
