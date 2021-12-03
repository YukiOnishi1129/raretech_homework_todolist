/**
 * InputArea
 * @package components
 */
import React from "react";

/**
 * InputArea
 * @param {*} props
 * @returns
 */
export const InputArea = (props) => {
  /* props */
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
