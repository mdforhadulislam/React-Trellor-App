import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { edit_task_action } from "../Redux/Actions/TaskAction";

function EditTaskItem({ task, setIsEdit }) {
  const [editValue, setEditValue] = useState(task.taskTitle);

  const dispatch = useDispatch();

  const editHendeler = () => {
    dispatch(edit_task_action({ id: task.id, title: editValue }));
    setIsEdit(false);
  };

  return (
    <div className=" absolute w-[14rem] h-auto bg-gray-100 shadow-lg rounded top-[-.5rem] left-[-12.2rem] p-1 z-10">
      <textarea
        type="text"
        className="w-full p-1 outline-none border rounded resize-none"
        placeholder="Edit Task"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        autoFocus
      ></textarea>
      <div className="m-1 flex justify-between">
        <button
          className="p-1 pl-2 pr-2 rounded shadow bg-white"
          onClick={editHendeler}
        >
          Save
        </button>
        <button
          className=" font-semibold text-lg text-red-500"
          onClick={() => setIsEdit(false)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default EditTaskItem;
