function TodoItem1() {
  let todolist = 'By Milk';
  let tododate = '4/10/2026';

  return (
    <div class="row-justify-content1">
      <div class="col-md-auto">{todolist}</div>
      <div class="col-md-auto">{tododate}</div>
      <div class="col col-lg-2">
        <button  type="button" class="btn btn-danger kgbutton">
          Danger
        </button>
      </div>
    </div>
  );
}
export default TodoItem1;
