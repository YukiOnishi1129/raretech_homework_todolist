/**
 * App
 * @package src
 */
import React, { useState } from "react";
/* components */
import { InputArea } from "./components/InputArea";
import { TodoArea } from "./components/TodoArea";
/* constants */
import { INITIAL_TASKS, INITIAL_TASKS_LENGTH } from "./constants/data";
/* styles */
import "./CSS/style.scss";

/**
 * App
 * @returns
 */
export const App = () => {
  // task追加時にIdを連番にするために定義
  // 初期のtaskが2つあるため2から始める
  // CATION   !!!!：テストのためのデータを消す場合は初期値を0にする!!!!!!!
  const [currentId, setCurrentId] = useState(INITIAL_TASKS_LENGTH);
  // 新しいtodoの入力値を保持するstate
  const [inputTodo, setInputTodo] = useState("");

  // 表示するtodoListを保持するstate
  // 検索機能を実装する前の名残
  // TodoListの初期値を読み込み
  const [todos, setTodos] = useState(INITIAL_TASKS);

  // 検索キーワードを保持するstate
  const [searchKeyword, setSearchKeyword] = useState("");

  /**
   * todo追加機能
   * @param {*} event
   * @returns
   */
  const onChangeInputTodo = (event) => setInputTodo(event.target.value);

  /**
   *  todo追加処理
   * @param {*} event
   * @returns
   */
  const pressEnter = (event) => {
    if (event.key === "Enter") {
      // 空文字もしくはスペースのみのときは処理を抜ける
      if (inputTodo === "" || !inputTodo.match(/\S/g)) return;
      const nextTodoId = currentId + 1;
      // 新しく追加するためのtaskを定義する
      const newTodos = [
        ...todos,
        {
          id: nextTodoId,
          title: inputTodo,
          todoShowFlag: true,
        },
      ];
      setTodos(newTodos);

      // inputFormを空にする
      setInputTodo("");
      // 次のtaskのidが重複しないように +1しておく
      setCurrentId(nextTodoId);
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

  /**
   * todoの検索ワードを受け取る関数
   * @param {*} event
   */
  const onChangeSearchTodo = (event) => {
    setSearchKeyword(event.target.value);
    // 検索処理
    changeShowFlag(event.target.value);
  };

  /**
   * 検索ワードに一致したTodoのshowFlagを変更する関数
   */
  const changeShowFlag = (searchKeyword) => {
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

  /**
   * 削除機能
   * @param {*} taskId
   */
  const onClickDelete = (taskId) => {
    if (window.confirm("Todoを削除しますか？")) {
      // 削除ボタンが押されたtaskのIdに一致しないtaskで新たにtodoListを作成する
      const deletedTodos = todos.filter((todos) => todos.id !== taskId);
      setTodos(deletedTodos);
    }
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
          placeholder="New Todo"
        />
        <InputArea
          inputTodo={searchKeyword}
          onChange={onChangeSearchTodo}
          placeholder="Search Todo"
        />
        <TodoArea todos={todos} onClickDelete={onClickDelete} />
      </div>
    </>
  );
};
