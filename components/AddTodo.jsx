import { MdOutlineFileDownloadDone } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function AddTodo({ todoNameElement, dueDateElement }) {
  const contextValue = useContext(TodoItemsContext);
  const addOnkey = contextValue.addNewItem;
  return (
    <div className="container text-center">
      <form className="row justify-content-md-center" onSubmit={addOnkey}>
        <div className="col-md-auto">
          <input type="text" ref={todoNameElement} placeholder="Enter Todo" />
        </div>
        <div className="col-md-auto">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col col-lg-2">
          <button className="btn btn-success" onClick={addOnkey}>
            <MdOutlineFileDownloadDone />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
