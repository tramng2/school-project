import './App.css';
import TodoList from './components/TodoList'
import Input from './components/Input'
import React, { useState } from 'react';
import TodoItem from './components/TodoItem';


function App() {
  const [input, setInput] = useState({ desc: "", date: "" })
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value })
  }
  const handleClick = () => {
    if (input.desc !== "" && input.date !== "") {
      setTodos([...todos, input])
      setInput({ desc: "", date: "" });
    } else {
      alert("Please fill out date and description")
    }
  }

  const renderTodos = todos.map((item, index) => {
    return (
     <TodoItem key={index} index={index} item={item} setTodos={setTodos} todos={todos}/>
    )
  })

  return (
    <div>
      <Input desc={input.desc} date={input.date} handleChange={handleChange} handleClick={handleClick} />
      <TodoList renderTodos={renderTodos} />
    </div>
  );
}

export default App;
