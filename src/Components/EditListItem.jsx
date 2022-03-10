import React from "react";
import { useDispatch } from "react-redux";
import { edit_title_action } from "../Redux/Actions/ListAction";

function EditListItem({ eidtValue, setEditValue, setIsEdit, id }) {
  const dispatch = useDispatch();

  return (
    <div className=" bg-slate-100 w-[18.65rem] rounded z-20 p-2">
      <textarea
        type="text"
        className="w-full outline-none border rounded p-1"
        value={eidtValue}
        onChange={(e) => {
          setEditValue(e.target.value);
        }}
      ></textarea>
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
  );
}

export default EditListItem;
