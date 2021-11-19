import React, { useState } from "react";
import trashCan from "./images/trash_can.svg";

export const App = () => {
  const [inputTodo,setInputTodo] = useState("");
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);

  const onChangeInputTodo = (event) => setInputTodo(event.target.value);

  const pressEnter = (event) => {
    if (event.key === 'Enter'){
      // 空文字もしくはスペースのみのときは処理を抜ける
      if (inputTodo === "" || !inputTodo.match(/\S/g)) return;

      const newTodos = [...todos, inputTodo];
      setTodos(newTodos)
      setInputTodo("")
    }
  }

  const onClickDelete = (index) => {
    alert(`${index}削除です`)
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
          {todos.map((todo, index) => {
            return (
              <div key={todo}>
                <li>{todo}</li>
                {/* 引数を渡した関数をonClickに指定すると画面がレンダリングされた際にonClickイベントが発火してしまうためアロー関数にして指定する */}
                <button><img onClick={() => onClickDelete(index)} src={trashCan} alt="削除" /></button>
                {/* <input type="image" src={trashCan} alt="削除" /> */}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
