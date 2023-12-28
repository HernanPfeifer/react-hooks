
export const TodoItem = ({todo, onToggle, onDeleteTodo}) => {

  const textDecoration = todo.done ? 'line-through' : 'none'
  return (
    <li className="list-group-item d-flex justify-content-between">
        {/* <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} /> */}
        <span style={{textDecoration}} onClick={ () => onToggle (todo.id) }>{ todo.description } </span>
        <button className="btn btn-danger" onClick={ () => onDeleteTodo (todo.id) }>Borrar</button>
    </li>
  )
}
