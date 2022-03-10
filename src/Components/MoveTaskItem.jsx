import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { move_list_task } from "../Redux/Actions/ListAction";

function MoveTaskItem({ allBoard, allList, task, listId, setIsMove }) {
  const [selsectBoardId, setSelsectBoardId] = useState("");
  const [selectListId, setSelectListId] = useState("");

  const dispatch = useDispatch();

  const saveHendeler = () => {
    setIsMove(false);
    dispatch(
      move_list_task({
        listId: selectListId,
        taskId: task.id,
        presentListId: listId,
      })
    );
  };

  return (
    <div className="  w-[18.7rem] h-auto bg-gray-100 shadow rounded mt-2 p-3 z-10">
      <h1 className=" text-lg  text-center">
        <span className="font-medium">{task.taskTitle}</span> Move To Another
        Bord List
      </h1>

      <div className="w-full mt-1">
        <p className="text-base text-center">Select Bord</p>
        <select
          className="w-full outline-none border p-1 rounded "
          value={selsectBoardId}
          onChange={(e) => {
            setSelsectBoardId(e.target.value);
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
          value={selectListId}
          onChange={(e) => {
            setSelectListId(e.target.value);
          }}
        >
          <option value={""}>Select</option>
          {allBoard
            .filter((board) => board.id === Number(selsectBoardId))
            .map((board) =>
              board.list.map((item) =>
                allList
                  .filter((list) => list.id === item && list.id !== listId)
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
          onClick={saveHendeler}
          className="p-1 pl-2 pr-2 bg-white rounded shadow border cursor-pointer"
        >
          Save
        </button>
        <button
          onClick={() => setIsMove(false)}
          className=" text-red-600 text-lg font-semibold cursor-pointer"
        >
          X
        </button>
      </div>

      {/*  */}
    </div>
  );
}

export default MoveTaskItem;
