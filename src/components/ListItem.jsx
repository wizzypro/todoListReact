import React, { useState } from "react";

function ListItem(props) {
  const [clickedState, setClickedState] = useState(false);
  function clickHandler(event) {
    clickedState ? setClickedState(false) : setClickedState(true);
  }
  return (
    <li
      onClick={clickHandler}
      style={{ textDecoration: clickedState && "line-through" }}
    >
      {props.item}
    </li>
  );
}

export default ListItem;
