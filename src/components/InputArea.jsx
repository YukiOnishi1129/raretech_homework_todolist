import React from "react";

export const InputArea = (props) => {
  const { inputTodo, onChange, onKeyPress } = props;

  return (
    <div>
      <p>ADD TODO</p>
      <input
        type="text"
        placeholder="New Todo"
        value={inputTodo}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};
