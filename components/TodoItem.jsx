import {MdOutlineAutoDelete} from "react-icons/md";
function TodoItem({handleDeleleItem,todoDate,todoName}) {
  return (
    <div className="row-justify-content1">
      <div className="col-md-auto">{todoDate}</div>
      <div className="col-md-auto">{todoName}</div>
      <div className="col col-lg-2">
        <button type="button" className="btn btn-danger kgbutton" onClick={() => (handleDeleleItem(todoName))}>
          <MdOutlineAutoDelete />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
