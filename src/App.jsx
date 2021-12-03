import React, { useState } from "react";

import { InputArea } from "./components/InputArea";
import { TodoArea } from "./components/TodoArea";
/* constants */
import { INITIAL_TASKS } from "./constants/data";

import "./CSS/style.scss";

export const App = () => {
  // Todo検索時に各Todoに表示非表示の判定をするフラグが必要となったため、Todoのデータ型を連想配列にした
  // const initialTasks = [
  //   {
  //     id: 1,
  //     title: "Todo1",
  //     todoShowFlag: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Todo2",
  //     todoShowFlag: true,
  //   },
  // ];

  // task追加時にIdを連番にするために定義
  // 初期のtaskが2つあるため2から始める
  // CATION   !!!!：テストのためのデータを消す場合は初期値を0にする!!!!!!!
  const [currentId, setCurrentId] = useState(2);
  // 新しいtodoの入力値を保持するstate
  const [inputTodo, setInputTodo] = useState("");

  // 表示するtodoListを保持するstate
  // 検索機能を実装する前の名残
  // const [todos, setTodos] = useState(["Todo1", "Todo2"]);
  // TodoListの初期値を読み込み
  const [todos, setTodos] = useState(INITIAL_TASKS);

  // 検索キーワードを保持するstate
  const [searchKeyword, setSearchKeyword] = useState("");

  // todo追加機能
  const onChangeInputTodo = (event) => setInputTodo(event.target.value);

  const pressEnter = (event) => {
    if (event.key === "Enter") {
      // 空文字もしくはスペースのみのときは処理を抜ける
      if (inputTodo === "" || !inputTodo.match(/\S/g)) return;
      // 新しく追加するためのtaskを定義する
      const newTask = {
        id: currentId + 1,
        title: inputTodo,
        todoShowFlag: true,
      };

      const newTodos = [...todos, newTask];
      setTodos(newTodos);

      // inputFormを空にする
      setInputTodo("");
      // 次のtaskのidが重複しないように +1しておく
      setCurrentId(currentId + 1);
    }
  };

  // 検索機能(仮) => 検索ワードから外れたTodoは削除されてしまう
  // filterを使用してtodoの配列から外れた要素を削除しているのが問題。
  // const onChangeSearchTodo = (event) => {
  //   const searchKeyword = event.target.value;
  //   const regexp = new RegExp("^" + searchKeyword, "i");
  //   const searchedTodos = todos.filter((event) => event.match(regexp));
  //   setTodos(searchedTodos);
  // };

  // todoの検索ワードを受け取る関数
  const onChangeSearchTodo = (event) => {
    setSearchKeyword(event.target.value);
  };

  // 検索ワードに一致したTodoのshowFlagを変更する関数
  const changeShowFlag = () => {
    //　先頭一致の正規表現を作成
    const regexp = new RegExp("^" + searchKeyword, "i");

    // Todoと検索ワードが先頭から部分一しない場合はshowFlagをfalseにする
    for (const todo of todos) {
      if (!todo.title.match(regexp)) {
        todo.todoShowFlag = false;
      } else {
        todo.todoShowFlag = true;
      }
    }
  };

  // showFlagを変更する関数を実行
  changeShowFlag();

  // 削除機能
  const onClickDelete = (taskId) => {
    // 削除ボタンが押されたtaskのIdに一致しないtaskで新たにtodoListを作成する
    const deletedTodos = todos.filter((todos) => todos.id !== taskId);
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
          placeholder={"New Todo"}
        />
        <InputArea onChange={onChangeSearchTodo} placeholder={"Search Todo"} />
        <TodoArea todos={todos} onClickDelete={onClickDelete} />
      </div>
    </>
  );
};
