import React from "react";

function Button(props) {
  return (
    <button onClick={props.onClick}>
      <span>{props.value}</span>
    </button>
  );
}

export default Button;
