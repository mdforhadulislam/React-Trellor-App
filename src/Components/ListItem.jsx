import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_list_task_id_action } from "../Redux/Actions/ListAction";
import { add_task_action } from "../Redux/Actions/TaskAction";

function ListItem({ id, title, task }) {
  const [addTask, setAddTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const allTask = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const addTaskHendeler = (e) => {
    e.preventDefault();
    setAddTask(false);
    const obj = {
      id: Math.round(Date.now() * Math.random()),
      taskTitle,
    };
    dispatch(add_task_action(obj));
    dispatch(add_list_task_id_action({ listId: id, taskId: obj.id }));
    setTaskTitle("");
  };

  const threeDot =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAG9JREFUSEtjZKAxYKSx+QwjywIHBgaG+dAgTWRgYDhATPCSEkQPGBgY5KGGgtiK1LbgAwMDAz/U0IcMDAwK1LYAFEQLoIYm0CKIiHEwhhpS4oDmFoymIoJBPJqKiAqi0bIIbzCNpiKCqYgsBTQvTQFNkxgZM6/25AAAAABJRU5ErkJggg==";

  const plusIcon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVRJREFUSEu9lW1RAzEURU+VAAqgCkACKAAHUCWAAkAB4AAUAA6KEpgzk9dJ0t2klG3fTH7sJrn3fd7M2LHNdozPJgRXwClwkpY+fab1Ary2nGwRnAO3wGEnyiWwACRbszGCO+A6nf4G/H5LXvvbaM6AG+AgnfOMRIUNEeTgXvC7ZZIYqXafSFfnawLT8px255nHvV4woo906CJPV01gPg15zPOfBDIUeUQixlF4lB+0Wx4Acz5W2BaBmOHgKoqc4BG4bHgvQI8gongCdLiYA3v7GGjlvkcQtRBLnIJg6HL86xU5z0SBM7qRECclmDJFXyErey1yDFnRx1Xye0Vutmnex/8ZtGKO9i4VRpGLnYOjgE0mdgGUk5hXv98rufYR0oGQlTUlrQet9tKiCxx6PxaFOZfoTw9ODiaRSxlQSjT73LkRdBB4SE17crDV/iaP/lbAcekXtcVYGaT13/YAAAAASUVORK5CYII=";

  return (
    <div className="w-[17rem] h-auto p-2 bg-white rounded shadow-md inline-block m-3">
      <div className=" bg-slate-200 pl-2 pr-4  pt-2 pb-2 rounded">
        <div className="flex  justify-between align-middle ">
          <h1 className="text-slate-900 text-lg font-medium">{title}</h1>
          <img className=" cursor-pointer" src={threeDot} alt={"threeDot"} />
        </div>
        {allTask
          .filter((fullTask) => {
            return task.filter((item) => item === fullTask.id) > 0;
          })
          .map((items) => {
            return <p key={items.id}>{items.taskTitle}</p>;
          })}
      </div>
      {addTask ? (
        <div className="flex bg-slate-200 justify-between  pl-2 pr-2 pt-2 pb-2 rounded mt-2 ">
          <form className="w-full">
            <input
              type="text"
              className="w-full border-none outline-none p-1 mb-2 rounded"
              onChange={(e) => setTaskTitle(e.target.value)}
              value={taskTitle}
            />
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

export default ListItem;
