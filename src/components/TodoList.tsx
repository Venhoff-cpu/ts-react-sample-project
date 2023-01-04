import React from "react";
import {Todo} from "../todo.models";
import "./TodoList.css"
interface TodoListProps {
    items: Todo[],
    onDeleteTodo: (todoId: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({items, onDeleteTodo}) => {
    return (
        <ul>
            {items.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
                </li>
                )
            )}
        </ul>
    )
}