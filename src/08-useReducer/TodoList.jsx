import { TodoItem } from "./TodoItem"

export const TodoList = ( {todos = [], onDeleteTodo, onToggle  }) => {
  return (
        <ul className="list-group">
            { 
                todos.map( todo => (
                    <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo}  onToggle={onToggle}/>
                ))
            }
        </ul>   
  )
}
