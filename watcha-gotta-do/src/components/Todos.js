import React, { useState } from "react";
import { connect } from "react-redux";

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  //one input with a handleChange method & one button...
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log("props from store", props);
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />
      <button className="add-btn">Add</button>
    </div>
  );
};

//to use the connect method ... creating a higher order fxn that takes Todos and adding redux functinalities and then returning it
export default connect(null, null)(Todos);
