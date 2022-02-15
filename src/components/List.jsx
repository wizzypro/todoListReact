import React from "react";
import ListItem from "./ListItem";

function List(props) {
  return (
    <div>
      <ul>
        {props.array.map((list) => (
          <ListItem item={list} />
        ))}
      </ul>
    </div>
  );
}

export default List;
