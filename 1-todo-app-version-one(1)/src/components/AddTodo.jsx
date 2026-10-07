function AddTodo() {
  return <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-auto">
            <input type="text" placeholder="Enter-Todo-App" />
          </div>
          <div class="col-md-auto">
            <input type="date" />
          </div>
          <div class="col col-lg-2">
            <button>
              <button type="button" class="btn btn-success">
                Add
              </button>
            </button>
          </div>
        </div>
        </div>
}
export default AddTodo;