import React, { useState } from "react";

function App() {
  const [listArray, setListArray] = useState([]);
  const [list, setList] = useState("");

  function listHandler(event) {
    const { value } = event.target;
    setList(value);
  }

  function todoHandler(event) {
    setListArray((prevValue) => {
      return [...prevValue, list];
    });
    setList("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" name="todo" onChange={listHandler} value={list} />
        <button onClick={todoHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listArray.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
