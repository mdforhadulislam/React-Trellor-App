import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { move_bord } from "../Redux/Actions/BordActions";

function MoveListItem({ setIsMove, id, bordId, allBord }) {
  const [selectedBordId, setSelectedBordId] = useState("");

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

  return (
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
        {allBord
          .filter((bord) => bord.id !== bordId)
          .map((bord) => (
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
  );
}

export default MoveListItem;
