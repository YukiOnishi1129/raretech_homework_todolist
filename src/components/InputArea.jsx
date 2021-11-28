import React from "react";

export const InputArea = (props) => {
  const { inputTodo, onChange, onKeyPress } = props;

  return (
      <input
        type="text"
        placeholder="New Todo"
        value={inputTodo}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
  );
};
