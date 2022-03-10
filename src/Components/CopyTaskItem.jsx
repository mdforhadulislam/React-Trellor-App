import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { copy_list_task } from "../Redux/Actions/ListAction";
import { copy_task_action } from "../Redux/Actions/TaskAction";

export default function CopyTaskItem({ allBoard, allList, setIsCopy, task }) {
  const [selsectCopyBoardId, setSelsectCopyBoardId] = useState("");
  const [selectCopyListId, setSelectCopyListId] = useState("");

  const dispatch = useDispatch();
  return (
    <div className=" w-[18.7rem] h-auto bg-gray-100 mt-2 shadow rounded p-3 z-10">
      <h1 className=" text-lg  text-center">
        <span className="font-medium">{task.taskTitle}</span> Copy To Another
        Bord List
      </h1>

      <div className="w-full mt-1">
        <p className="text-base text-center">Select Bord</p>
        <select
          className="w-full outline-none border p-1 rounded "
          value={selsectCopyBoardId}
          onChange={(e) => {
            setSelsectCopyBoardId(e.target.value);
          }}
        >
          <option value={""}>Select</option>
          {allBoard.map((board) => (
            <option key={board.id} value={board.id}>
              {board.title}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full mt-2">
        <p className="text-center">Select List</p>
        <select
          className="w-full outline-none border p-1 rounded "
          value={selectCopyListId}
          onChange={(e) => {
            setSelectCopyListId(e.target.value);
          }}
        >
          <option value={""}>Select</option>
          {allBoard
            .filter((board) => board.id === Number(selsectCopyBoardId))
            .map((board) =>
              board.list.map((item) =>
                allList
                  .filter((list) => list.id === item)
                  .map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.listTitle}
                    </option>
                  ))
              )
            )}
        </select>
      </div>

      <div className="w-full flex mt-2 justify-between cursor-auto">
        <button
          onClick={() => {
            const obj = { id: Math.round(Date.now() * Math.random()) };
            setIsCopy(false);
            dispatch(copy_task_action({ id: task.id, newTaskId: obj.id }));
            dispatch(
              copy_list_task({ listId: selectCopyListId, taskId: obj.id })
            );
          }}
          className="p-1 pl-2 pr-2 bg-white rounded shadow border cursor-pointer"
        >
          Save
        </button>
        <button
          onClick={() => {
            setIsCopy(false);
          }}
          className=" text-red-600 text-lg font-semibold cursor-pointer"
        >
          X
        </button>
      </div>
    </div>
  );
}
