import React from "react";

export const InputArea = (props) => {
  const { inputTodo, onChange, onKeyPress, placeholder } = props;

  return (
      <input
        type="text"
        placeholder={placeholder}
        value={inputTodo}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
  );
};
