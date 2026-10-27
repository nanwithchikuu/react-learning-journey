import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
const TodoItems = () => {
  const contextValue = useContext(TodoItemsContext)
  const todoItems = contextValue.items
  const deleteItem = contextValue.deleteItem
  return (
    <div className="items-container">
      
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          handleDeleleItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default TodoItems;
