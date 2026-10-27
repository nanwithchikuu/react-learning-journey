import {  useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const HeadderMessage = () => {
const contextValue = useContext(TodoItemsContext)
const todoItems = contextValue.items; 
return (
  todoItems.length === 0 && (
    <div>
        <p>Enjoy Your Day</p>
      </div>
    )
  );
};
export default HeadderMessage;
