import React from 'react'
import '../App.css'

const Input = (props) => {
    return (
        <div>
            <div className="todo_title">
                <p>Simple Todolist</p>
            </div>
            <div className="todo_addBox">
                <p className="todo_tag">Add todo:</p>
                <span>Description: </span>
                <input placeholder="todo" name="desc" onChange={props.handleChange} value={props.desc}></input>
                <span>Date: </span>
                <input placeholder="date" name="date" onChange={props.handleChange} value={props.date}></input>
                <button onClick={props.handleClick}>Add</button>
            </div>
        </div>
    )
}

export default Input
