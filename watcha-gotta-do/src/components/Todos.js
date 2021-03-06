import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} from "../redux/reducer";
import { GoPlus } from "react-icons/go";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  //one input with a handleChange method & one button...

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  //console.log("props from store", props);
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />
      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }>
        <GoPlus />
      </button>
      <br />
      {/* <ul>
        {props.todos.map((item) => {
          return (
            
          );
        })}
      </ul> */}
    </div>
  );
};

//to use the connect method ... creating a higher order fxn that takes Todos and adding redux functinalities and then returning it
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
