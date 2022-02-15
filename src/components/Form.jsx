import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <div className={props.className}>
      <Input
        type="text"
        name="todo"
        onChange={props.inputOnChange}
        value={props.inputValue}
      />
      <Button onClick={props.btnOnClick} value={props.btnValue} />
    </div>
  );
}

export default Form;
