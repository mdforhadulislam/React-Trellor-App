import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  delete_bord_action,
  edit_bord_name,
} from "../Redux/Actions/BordActions";

function SingleBordBox({ id, bgColor, title, list }) {
  const [editAndDelete, setEditAndDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState("");
  const dispatch = useDispatch();

  const saveButton = (e) => {
    e.preventDefault();
    if (editName !== "") {
      dispatch(edit_bord_name({ bordId: id, title: editName }));
      setIsEdit(false);
    }
  };

  const threeDot =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAG9JREFUSEtjZKAxYKSx+QwjywIHBgaG+dAgTWRgYDhATPCSEkQPGBgY5KGGgtiK1LbgAwMDAz/U0IcMDAwK1LYAFEQLoIYm0CKIiHEwhhpS4oDmFoymIoJBPJqKiAqi0bIIbzCNpiKCqYgsBTQvTQFNkxgZM6/25AAAAABJRU5ErkJggg==";

  return (
    <div
      key={id}
      className="w-[17rem] h-[7rem] inline-block m-2 bg-white p-2 rounded shadow-lg relative"
    >
      <div className={[bgColor, " h-[6rem] p-2 rounded flex"].join(" ")}>
        <Link to={`/${id}`} className="w-full text-left">
          <div className="w-full ">
            <h1 className=" font-semibold text-xl">{title}</h1>
            <p>This board has {list.length} List</p>
          </div>
        </Link>
        <img
          onClick={() => {
            setEditAndDelete(!editAndDelete);
          }}
          className="cursor-pointer z-50 w-[2rem] h-[2rem] absolute right-3 top-3"
          src={threeDot}
          alt="threeDot"
        />
        {editAndDelete && (
          <div className=" absolute w-[13rem] h-[5rem] bg-white rounded left-4 top-4">
            <ul className="list-none text-lg font-semibold text-left p-1">
              <li
                onClick={() => {
                  setEditAndDelete(false);
                  setIsEdit(true);
                  setEditName(title);
                }}
                className=" hover:bg-teal-500 p-1 text-sky-800 cursor-pointer hover:text-white rounded"
              >
                Edit Bord Title
              </li>
              <li
                onClick={() => {
                  setEditAndDelete(false);
                  dispatch(delete_bord_action(id));
                }}
                className=" hover:bg-teal-500 p-1 text-sky-800 cursor-pointer hover:text-white rounded"
              >
                Delete Bord
              </li>
            </ul>
          </div>
        )}
        {isEdit && (
          <div className=" absolute w-[13rem] h-[5rem]  bg-white rounded left-4 top-4 p-2">
            <input
              type="text"
              className="border outline-none w-full p-1 rounded"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <div className="flex justify-between mt-1">
              <button
                className=" bg-slate-200 shadow pl-3 pr-3 rounded"
                onClick={saveButton}
              >
                Save
              </button>
              <button
                className="text-xl text-red-600 cursor-pointer"
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleBordBox;
