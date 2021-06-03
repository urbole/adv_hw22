import classNames from "classnames";
import { Component } from "react";
import { input, correct, incorrect } from "./Input.module.css";


const Input = (props) => {
  const { children, variant, type } = props;

  return (
    <input
      className={classNames(input, {
        [correct]: variant === 'correct',
        [incorrect]: variant === 'incorrect'
      })}
      type={type}
      placeholder={children}
    />
  );
};

export default Input;