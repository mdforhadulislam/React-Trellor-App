import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { copy_bord } from "../Redux/Actions/BordActions";
import { copy_list_action } from "../Redux/Actions/ListAction";

function CopyListItem({ setIsCopy, id, allBord }) {
  const [selectedCopyBordId, setSelectedCopyBordId] = useState("");

  const dispatch = useDispatch();

  const copyHendeler = () => {
    setIsCopy(false);
    const obj = { newListId: Math.round(Date.now() * Math.random()) };
    dispatch(
      copy_list_action({
        listId: id,
        newListId: obj.newListId,
      })
    );
    dispatch(
      copy_bord({ selectedCopyBord: selectedCopyBordId, ListId: obj.newListId })
    );
  };

  return (
    <div className="bg-slate-100 w-[18.65rem] rounded  z-30 p-2">
      <h1 className=" text-lg font-semibold text-center">
        Copy This List Another Bord
      </h1>
      <select
        className=" w-full outline-none border p-1 mt-1"
        value={selectedCopyBordId}
        onChange={(e) => {
          setSelectedCopyBordId(e.target.value);
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
          onClick={copyHendeler}
          className="p-1 pl-2 pr-2 bg-white rounded shadow"
        >
          Save
        </button>
        <button
          onClick={() => {
            setIsCopy(false);
          }}
          className="text-red-600 cursor-pointer text-lg"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default CopyListItem;
