import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delete_bord_action } from "../Redux/Actions/BordActions";

function SingleBordBox({ id, bgColor, title, list }) {
  const [editAndDelet, setEditAndDelet] = useState(false);
  const dispatch = useDispatch();

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
            setEditAndDelet(!editAndDelet);
          }}
          className="cursor-pointer z-50 w-[2rem] h-[2rem] absolute right-3 top-3"
          src={threeDot}
          alt="threeDot"
        />
        {editAndDelet && (
          <div className=" absolute w-[13rem] h-[5rem] bg-white rounded left-4 top-4">
            <ul className="list-none text-lg font-semibold text-left p-1">
              <li
                onClick={() => {
                  setEditAndDelet(false);
                }}
                className=" hover:bg-teal-500 p-1 text-sky-800 cursor-pointer hover:text-white rounded"
              >
                Edit Bord Title
              </li>
              <li
                onClick={() => {
                  setEditAndDelet(false);
                  dispatch(delete_bord_action(id));
                }}
                className=" hover:bg-teal-500 p-1 text-sky-800 cursor-pointer hover:text-white rounded"
              >
                Delete Bord
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleBordBox;
