import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
function AppToDo(props) {
  return (
    <div>
      <span className="add_input-title">Add todo:</span>
      <label>Description: </label>
      <input type="text" value={props.desc} onChange={props.handleChange} name="desc" />
      <label>Date: </label>
      <input type="text" value={props.date} onChange={props.handleChange} name="date" />
      <button onClick={props.handleClick}>Add</button>

    </div>
  )
}

export default AppToDo;