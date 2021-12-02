import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

export const TodoArea = (props) => {
  const { todos, onClickDelete} = props;

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="todo-list">
              {todo.todoShowFlag && <li className="list-low">
                {todo.title}
                {/* 引数を渡した関数をonClickに指定すると画面がレンダリングされた際にonClickイベントが発火してしまうためアロー関数にして指定する */}
                <FontAwesomeIcon
                  onClick={() => onClickDelete(todo.id)}
                  icon={faTrashAlt}
                  alt="削除"
                  className="icon"
                />
              </li> }
            </div>
          );
        })}
      </ul>
    </>
  );
};
