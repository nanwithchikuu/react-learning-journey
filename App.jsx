import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import HeadderMessage from "./components/HeadderMessage";
import { useRef, useState, useReducer } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
import { BsDisplayport } from "react-icons/bs";

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [{
      ...currentTodoItems,
      name: action.payload.name,
      dueDate: action.payload.dueDate,
    }
  ]
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter((item) => item.name !== action.payload.name);
  } 
    return newTodoItems;
};


function App() {
  // const [todoItems, setTodo] = useState([]);
  const todoNameElement = useRef("");
  const dueDateElement = useRef("");

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (event) => {
    const inputValue = todoNameElement.current.value;
    const inputDateValue = dueDateElement.current.value;
    event.preventDefault();
    const newItemAction = {
      type: "NEW_ITEM",
    payload: {
      name: inputValue,
      dueDate: inputDateValue,
    }
    };
    dispatchTodoItems(newItemAction)
    todoNameElement.current.value =""
    dueDateElement.current.value = ""
  };

  const deleteItem = (todoItemName, inputValue,inputDateValue) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        name: todoItemName,
        dueDate: inputDateValue,
      }
    };
    dispatchTodoItems(deleteItemAction)
  };

  return (
    <TodoItemsContext.Provider
      value={{
        items: todoItems,
        deleteItem: deleteItem,
        addNewItem: addNewItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo
          todoNameElement={todoNameElement}
          dueDateElement={dueDateElement}
        />
        <HeadderMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
