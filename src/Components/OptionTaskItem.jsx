import React from "react";
import { useDispatch } from "react-redux";
import delete_list_task_id_action from "../Redux/Actions/ListAction";

function OptionTaskItem({
  setIsOption,
  setIsEdit,
  setIsMove,
  setIsCopy,
  listId,
  task,
}) {
  const dispatch = useDispatch();

  return (
    <div className=" absolute w-[11rem] h-auto bg-gray-100 shadow-lg rounded top-[1.6rem] left-[-9.2rem] z-[5]">
      <ul className="rounded">
        <li
          className=" p-1 hover:bg-slate-600 hover:text-gray-50 rounded "
          onClick={() => {
            setIsOption(false);
            setIsEdit(true);
          }}
        >
          Edit Task
        </li>
        <li
          className=" p-1 hover:bg-slate-600 hover:text-gray-50 rounded "
          onClick={() => {
            setIsOption(false);
            dispatch(delete_list_task_id_action({ listId, taskId: task.id }));
          }}
        >
          Delete Task
        </li>
        <li
          className=" p-1 hover:bg-slate-600 hover:text-gray-50 rounded "
          onClick={() => {
            setIsOption(false);
            setIsMove(true);
          }}
        >
          Move Task
        </li>
        <li
          className=" p-1 hover:bg-slate-600 hover:text-gray-50 rounded "
          onClick={() => {
            setIsOption(false);
            setIsCopy(true);
          }}
        >
          Copy Task
        </li>
      </ul>
    </div>
  );
}

export default OptionTaskItem;
