import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  delete_bord_list_id_action,
  move_bord,
} from "../Redux/Actions/BordActions";
import { delete_list, edit_title_action } from "../Redux/Actions/ListAction";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";

function ListItem({ id, title, task, bordId }) {
  const [isOption, setIsOption] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isMove, setIsMove] = useState(false);
  const [eidtValue, setEditValue] = useState("");
  const [selectedBordId, setSelectedBordId] = useState("");

  const allTask = useSelector((state) => state.task);
  const allBord = useSelector((state) => state.bord);

  const dispatch = useDispatch();

  const moveHendeler = () => {
    setIsMove(false);
    dispatch(
      move_bord({
        selectedBord: selectedBordId,
        newList: id,
        prevBrodId: bordId,
        prevListId: id,
      })
    );
  };

  const threeDot =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAG9JREFUSEtjZKAxYKSx+QwjywIHBgaG+dAgTWRgYDhATPCSEkQPGBgY5KGGgtiK1LbgAwMDAz/U0IcMDAwK1LYAFEQLoIYm0CKIiHEwhhpS4oDmFoymIoJBPJqKiAqi0bIIbzCNpiKCqYgsBTQvTQFNkxgZM6/25AAAAABJRU5ErkJggg==";

  return (
    <div className="w-[17rem] h-auto p-2 bg-white rounded shadow-md inline-block m-3">
      <div className=" bg-slate-200 pl-2 pr-4  pt-2 pb-2 rounded">
        <div className="flex  justify-between align-middle relative ">
          <h1 className="text-slate-900 text-lg font-medium">{title}</h1>
          <img
            onClick={() => {
              setIsOption(!isOption);
            }}
            className=" cursor-pointer z-10"
            src={threeDot}
            alt={"threeDot"}
          />
          {isOption && (
            <div className="absolute bg-slate-100 w-[16rem] rounded top-[-.5rem] left-[-.5rem]">
              <ul className=" rounded">
                <li
                  onClick={() => {
                    setIsOption(false);
                    setIsEdit(true);
                    setEditValue(title);
                  }}
                  className="hover:bg-teal-500 rounded p-1 pl-2 pr-2 hover:text-white cursor-pointer text-lg font-semibold"
                >
                  Edit Title
                </li>
                <li
                  onClick={() => {
                    setIsOption(false);
                    dispatch(delete_list({ id }));
                    dispatch(
                      delete_bord_list_id_action({ bordId, listId: id })
                    );
                  }}
                  className="hover:bg-teal-500 rounded p-1 pl-2 pr-2 hover:text-white cursor-pointer text-lg font-semibold"
                >
                  Delete List
                </li>
                <li
                  onClick={() => {
                    setIsOption(false);
                    setIsMove(true);
                  }}
                  className="hover:bg-teal-500 rounded  p-1 pl-2 pr-2 hover:text-white cursor-pointer text-lg font-semibold"
                >
                  Move List
                </li>
                <li
                  onClick={() => {
                    setIsOption(false);
                  }}
                  className="hover:bg-teal-500 rounded  p-1 pl-2 pr-2 hover:text-white cursor-pointer text-lg font-semibold"
                >
                  Copy List
                </li>
              </ul>
            </div>
          )}
          {isEdit && (
            <div className="absolute bg-slate-100 w-[16rem] rounded top-[-.5rem] left-[-.5rem] z-20 p-2">
              <input
                type="text"
                className="w-full outline-none border rounded p-1"
                value={eidtValue}
                onChange={(e) => {
                  setEditValue(e.target.value);
                }}
              />
              <div className="w-full flex justify-between mt-1">
                <button
                  className="p-1 pl-2 pr-2 bg-slate-200 rounded shadow"
                  onClick={() => {
                    setIsEdit(false);
                    dispatch(edit_title_action({ id, title: eidtValue }));
                  }}
                >
                  Save
                </button>
                <button
                  className="text-red-600 cursor-pointer"
                  onClick={() => {
                    setIsEdit(false);
                  }}
                >
                  X
                </button>
              </div>
            </div>
          )}
          {isMove && (
            <div className="absolute bg-slate-100 w-[16rem] rounded top-[-.5rem] left-[-.5rem] z-30 p-2">
              <h1 className=" text-lg font-semibold text-center">
                Move This List Another Bord
              </h1>
              <select
                className=" w-full outline-none border p-1 mt-1"
                value={selectedBordId}
                onChange={(e) => {
                  setSelectedBordId(e.target.value);
                }}
              >
                <option value="">select</option>
                {allBord.map((bord) => (
                  <option value={bord.id} className="" key={bord.id}>
                    {bord.title}
                  </option>
                ))}
              </select>
              <div className="mt-1 flex justify-between">
                <button
                  onClick={moveHendeler}
                  className="p-1 pl-2 pr-2 bg-white rounded shadow"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setIsMove(false);
                  }}
                  className="text-red-600 cursor-pointer text-lg"
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>
        {allTask
          .filter((fullTask) => {
            return task.filter((item) => item === fullTask.id) > 0;
          })
          .map((items) => {
            return <TaskItem key={items.id} task={items} listId={id} />;
          })}
      </div>
      <AddTask listId={id} />
    </div>
  );
}

export default ListItem;
