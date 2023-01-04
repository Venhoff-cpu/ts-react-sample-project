import React, {useRef} from "react";
import "./NewTodo.css"
interface NewTodoInterface {
    onSubmit: (todoText: string) => void;
}
export const NewTodo: React.FC<NewTodoInterface> = ( { onSubmit } ) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        onSubmit(enteredText)
    }
    return (
       <form onSubmit={todoSubmitHandler}>
           <div className="form-control">
               <label htmlFor="todo-text">
                   Todo Text
               </label>
               <input type="text" id="todo-text" ref={textInputRef} />
           </div>
           <button type="submit" >Add Todo</button>
       </form>
   )
}