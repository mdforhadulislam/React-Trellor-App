import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_list_task_id_action } from "../Redux/Actions/ListAction";
import { add_task_action } from "../Redux/Actions/TaskAction";

function AddTask({ listId }) {
  const [addTask, setAddTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  const dispatch = useDispatch();

  const addTaskHendeler = (e) => {
    e.preventDefault();
    if (taskTitle !== "") {
      setAddTask(false);
      const obj = {
        id: Math.round(Date.now() * Math.random()),
        taskTitle,
      };
      dispatch(add_task_action(obj));
      dispatch(add_list_task_id_action({ listId, taskId: obj.id }));
      setTaskTitle("");
    } else {
      alert("Write Your Task");
    }
  };

  const plusIcon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVRJREFUSEu9lW1RAzEURU+VAAqgCkACKAAHUCWAAkAB4AAUAA6KEpgzk9dJ0t2klG3fTH7sJrn3fd7M2LHNdozPJgRXwClwkpY+fab1Ary2nGwRnAO3wGEnyiWwACRbszGCO+A6nf4G/H5LXvvbaM6AG+AgnfOMRIUNEeTgXvC7ZZIYqXafSFfnawLT8px255nHvV4woo906CJPV01gPg15zPOfBDIUeUQixlF4lB+0Wx4Acz5W2BaBmOHgKoqc4BG4bHgvQI8gongCdLiYA3v7GGjlvkcQtRBLnIJg6HL86xU5z0SBM7qRECclmDJFXyErey1yDFnRx1Xye0Vutmnex/8ZtGKO9i4VRpGLnYOjgE0mdgGUk5hXv98rufYR0oGQlTUlrQet9tKiCxx6PxaFOZfoTw9ODiaRSxlQSjT73LkRdBB4SE17crDV/iaP/lbAcekXtcVYGaT13/YAAAAASUVORK5CYII=";

  return (
    <div>
      {addTask ? (
        <div className="flex bg-slate-200 justify-between  pl-2 pr-2 pt-2 pb-2 rounded mt-2 ">
          <form className="w-full">
            <textarea
              type="text"
              className="w-full border-none outline-none p-1 mb-2 rounded"
              onChange={(e) => setTaskTitle(e.target.value)}
              value={taskTitle}
              autoFocus
            ></textarea>

            <div className="flex justify-between">
              <button
                type="submit"
                className="p-1 bg-white shadow rounded mr-4 cursor-pointer pl-3 pr-3"
                onClick={(e) => addTaskHendeler(e)}
              >
                Add Task
              </button>
              <button
                onClick={() => setAddTask(false)}
                type="button"
                className="text-xl text-red-600 cursor-pointer"
              >
                X
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div
          onClick={() => {
            setAddTask(true);
          }}
          className="flex align-middle pl-1 pr-4  pt-2 pb-2 rounded cursor-pointer mt-1"
        >
          <img className="  mr-2" src={plusIcon} alt={"plusIcon"} />
          <h1>Add Task</h1>
        </div>
      )}
    </div>
  );
}

export default AddTask;
