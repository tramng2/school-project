import '../App.css'
const TodoList = (props) => {

    return (
        <div>
            <table className="table_list">
                <tbody className="table_column">
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    {props.renderTodos}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList
