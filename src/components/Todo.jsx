import React from "react";
import "../components/Todo.css";

export default function Todo({ todo, updateStatus, editTodo, deleteTodo }) {
  return (
    <>
      {/* Todo Card */}

      <div className="container d-flex justify-content-center align-items-center ">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div key={todo.id} className="col">
            <div
              class="card h-100 rounded-2"
              style={{
                width: "20rem",
                background: "#9cf7d7",
              }}
            >
              <div class="card-body m-2">
                <p class=" card-text text-black fw-bold">
                  <span id="name">Name:</span> {todo.taskName}{" "}
                </p>

                <p className="fw-bold">
                  <span id="description">Description:</span> {todo.description}
                </p>

                {/* Status */}

                <div className="mb-2">
                  {" "}
                  <label htmlFor="status" className="me-1">
                    <b id="status">Status:</b>
                  </label>
                  <select
                    className={
                      todo.status === "Completed"
                        ? "bg-success text-white"
                        : "bg-danger text-white"
                    }
                    style={{
                      borderRadius: "5px",
                      border: "none",
                    }}
                    value={todo.status}
                    name="status"
                    onChange={(e) => updateStatus(todo.id, e.target.value)}
                  >
                    <option
                      value="Completed"
                      className={
                        todo.status === "Completed" ? "bg-success" : ""
                      }
                    >
                      Completed
                    </option>
                    <option
                      value="Not Completed"
                      className={
                        todo.status !== "Completed"
                          ? "bg-danger text-white"
                          : ""
                      }
                    >
                      Pending
                    </option>
                  </select>
                </div>
              </div>

              {/* Edit */}
              <div className="float-end m-3  p-2">
                <button
                  className="btn mx-2"
                  style={{
                      borderRadius: "5px",
                      border: "none",
                      background: "#43b59a",
                      
                    }}
                  onClick={() => editTodo(todo.id)}
                  type="button"
                >
                  Edit
                </button>

                {/* Delete */}
                <button
                  className="btn btn-danger "
                  style={{
                      borderRadius: "5px",
                      border: "none",
                    }}
                  onClick={() => deleteTodo(todo.id)}
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
