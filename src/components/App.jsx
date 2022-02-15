import React, { useState } from "react";
import Heading from "./Heading";
import Form from "./Form";
import List from "./List";

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

  function deleteHandler(id) {
    setListArray((prevValue) => {
      return prevValue.filter((array, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <Heading className="heading" value="To-Do List" />
      <Form
        className="form"
        inputOnChange={listHandler}
        inputValue={list}
        btnValue="Add"
        btnOnClick={todoHandler}
      />
      <List array={listArray} id={deleteHandler} />
    </div>
  );
}

export default App;
