import React from "react";

function List(props) {
  return (
    <div>
      <ul>
        {props.array.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
