import React, { useState } from 'react'

const TodoItem = (props) => {
    const [isChecked, setCheck] = useState(false);
    const [style, setStyle] = useState({});

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    const handleCheck = () => {
        if (!isChecked) {
            setStyle(completedStyle)
        }
        setCheck(!isChecked)
    }

    const handleDelete = (index) => {
        props.setTodos(props.todos.filter(item => item !== props.todos[index]))
    }

    return (
        <tr key={props.index}>
            <th><input type="checkbox" onChange={() => handleCheck()} /></th>
            <td style={style}>{props.item.date}</td>
            <td style={style}>{props.item.desc}</td>
            <th><button onClick={() => handleDelete(props.index)}>Delete</button></th>
        </tr>

    )
}

export default TodoItem
