import React, { useState } from 'react'

const Todos = (props) => {
    const [todo, setTodo] = useState("");
//one input with a handleChange method & one button...
    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    return (
        <div className="addTodos">
            <input type="text" onChange={(e) => handleChange(e)} className="todo-input" value={todo} />

            <button className="add-btn">
                Add
            </button>
            <br />
        </div>
    );
};

export default Todos
