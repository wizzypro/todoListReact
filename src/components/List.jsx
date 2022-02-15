import React from "react";
import ListItem from "./ListItem";

function List(props) {
  return (
    <div>
      <ul>
        {props.array.map((list, i) => (
          <ListItem item={list} key={i} id={i} onClick={props.id} />
        ))}
      </ul>
    </div>
  );
}

export default List;
