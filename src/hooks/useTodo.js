import React, { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';


export const useTodo = () => {
    const initialState = [];
    
    const init = () => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    };
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    const todosCounter = todos.length;
    const todosCounterPending = todos.filter(todo => !todo.done).length;

    const handleTodoDelete = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    };
    
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        };
        dispatch(action);
    };
    
    const handleToggle = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        };
        dispatch(action);
    };
    
    return { todos,todosCounter, todosCounterPending, handleTodoDelete, handleNewTodo, handleToggle };
};