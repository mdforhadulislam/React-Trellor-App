import React from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "../icon/deleteIcon.svg";
import delete_list_task_id_action from "../Redux/Actions/ListAction";

function TaskItem({ task, listId }) {
  const dispatch = useDispatch();

  const deleteTask = (e) => {
    e.preventDefault();
    dispatch(delete_list_task_id_action({ listId, taskId: task.id }));
  };

  return (
    <div className="flex p-1 pr-2 pl-2 m-2 mr-0 bg-white rounded justify-between">
      <p>{task.taskTitle}</p>
      <div className="w-5 cursor-pointer">
        <img onClick={deleteTask} src={DeleteIcon} alt="DeleteIcon" />
      </div>
    </div>
  );
}

export default TaskItem;
