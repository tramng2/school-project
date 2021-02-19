import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import AppToDo from './AppToDo';

function Todolist() {
  const [input, setInput] = useState({ desc: "", date: "" });
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  const handleClick = () => {
    if(input.date !=="" &&input.desc!== ""){
      setTodos([...todos, {desc: input.desc, date: input.date }]);
      setInput({ desc: "", date: "" });
    } else {
      alert("Please fill the date and description")
    }
  }
  const handleDelete = (index) => {
    let result = todos.filter(deleteItem => deleteItem !== todos[index]);
    setTodos(result);
  }

  const renderTodos = todos.map((todo, index) =>
    <tr key={index} >
      <td>{todo.date}</td>
      <td>{todo.desc}</td>
      <td><button onClick={() => handleDelete(index)}>Delete</button></td>
    </tr>

  )
  return (
    <div>
      <div className="header">Simple Todolist</div>
      <div className="body">
        <div className="add_input">
          <AppToDo desc={input.desc} date={input.date} handleClick={handleClick} handleChange={handleChange}/>
        </div>
        <table className="render_list">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Description</th>
            </tr>
            {renderTodos}
          </tbody>
        </table>

      </div>
    </div>
  )
}
export default Todolist;