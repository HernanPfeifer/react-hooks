import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"


export const TodoApp = () => {

    const { todos, todosCounter, todosCounterPending, handleTodoDelete, handleNewTodo, handleToggle } = useTodo ()
  
    return (
    <>
        <h1>TodoApp {todosCounter}, <small>Pendientes: {todosCounterPending}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos= { todos } onDeleteTodo={handleTodoDelete} onToggle={handleToggle} />   
            </div>  
            <div className="col-5">
                <h4>Agregar Todo</h4>
                <hr />
                <TodoAdd onNewTodo={ handleNewTodo}/>            
            </div> 

        </div>  
    </>
  )
}
