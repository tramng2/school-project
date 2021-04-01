import React, { useState, useRef } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


function Todolist() {
    const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
    const [selectedDate, handleDateChange] = useState(new Date());
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value })
    }
    const addTodo = (event) => {
        setTodos([...todos, todo]);
        setTodo({ description: '', date: '', priority: '' });
    }

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex))
        } else {
            alert("Please select the item you want to delete");
        }
    }

    const columns = [
        { headerName: "Description", field: "description", sortable: true, filter: true },
        { headerName: "Date", field: "date", sortable: true, filter: true },
        { headerName: "Priority", field: "priority", sortable: true, filter: true, cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' } }
    ]
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <TextField
                    style={{ marginRight: '10px' }}
                    label="Description"
                    onChange={inputChanged}
                    name="description"
                    value={todo.description}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker 
                    label="Date"
                    value={selectedDate} 
                    onChange={(date) => setTodo({ ...todo, date: date.toLocaleDateString("en-US").split("/").join(".") })} />
                </MuiPickersUtilsProvider>
                <TextField
                    style={{ marginRight: '10px' }}
                    label="Priority"
                    onChange={inputChanged}
                    name="priority"
                    value={todo.priority}
                />
                <Button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={addTodo}
                    variant="contained"
                    color="primary"
                >Add
                </Button>
                <Button
                    style={{ marginRight: '10px', marginTop: '10px' }}

                    onClick={handleDelete}
                    variant="contained"
                    color="secondary" >Deleted
                </Button>
            </div>
            <div className="ag-theme-material" style={{ height: '700px', width: '50%', margin: 'auto' }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={el => gridRef.current = el.api}
                    rowSelection="single"
                    defaultColDef={{
                        flex: 1,
                        minWidth: 150,
                        filter: true,
                        sortable: true,
                        floatingFilter: true,
                    }}

                    columnDefs={columns}
                    rowData={todos}>

                    <AgGridColumn
                        field="description"
                        suppressMenu={true}
                        filter="agTextColumnFilter"
                    />

                </AgGridReact>
            </div >
        </div>


    );
};

export default Todolist;
