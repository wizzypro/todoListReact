import React, { useState } from "react";

function ListItem(props) {
  const [clickedState, setClickedState] = useState(false);
  function clickHandler(event) {
    setClickedState((prevValue) => {
      return !prevValue;
    });
    // clickedState ? setClickedState(false) : setClickedState(true);
  }
  return (
    <li
      onClick={() => {
        props.onClick(props.id);
      }}
      style={{ textDecoration: clickedState && "line-through" }}
    >
      {props.item}
    </li>
  );
}

export default ListItem;
