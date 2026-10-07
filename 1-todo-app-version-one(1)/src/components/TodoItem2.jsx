function TodoItem2() {
  let todolist = 'go to colege';
  let tododate = '4/10/2026';

  return (
    <div class="row-justify-content">
      <span class="col-md-auto">{todolist}</span>
      <span class="col-md-auto">{tododate}</span>
      <span class="col col-lg-2">
        <button type="button" class="btn btn-danger">
          Danger
        </button>
      </span>
    </div>
  );
}
export default TodoItem2;
