import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_bord_list_id_action } from "../Redux/Actions/BordActions";
import { add_list_action } from "../Redux/Actions/ListAction";

export default function AddList({ bord }) {
  const [addList, setAddlist] = useState(false);
  const [listTitle, setListTitle] = useState("");

  const dispatch = useDispatch();

  const submitHendeler = (e, bordId) => {
    e.preventDefault();
    if (listTitle !== "") {
      const obj = {
        id: Math.round(Date.now() * Math.random()),
        listTitle,
        task: [],
      };
      dispatch(add_list_action(obj));
      dispatch(add_bord_list_id_action({ bordId, listId: obj.id }));
      setAddlist(false);
      setListTitle("");
    } else {
      alert("Please enter a list name");
    }
  };

  const plusIcon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVRJREFUSEu9lW1RAzEURU+VAAqgCkACKAAHUCWAAkAB4AAUAA6KEpgzk9dJ0t2klG3fTH7sJrn3fd7M2LHNdozPJgRXwClwkpY+fab1Ary2nGwRnAO3wGEnyiWwACRbszGCO+A6nf4G/H5LXvvbaM6AG+AgnfOMRIUNEeTgXvC7ZZIYqXafSFfnawLT8px255nHvV4woo906CJPV01gPg15zPOfBDIUeUQixlF4lB+0Wx4Acz5W2BaBmOHgKoqc4BG4bHgvQI8gongCdLiYA3v7GGjlvkcQtRBLnIJg6HL86xU5z0SBM7qRECclmDJFXyErey1yDFnRx1Xye0Vutmnex/8ZtGKO9i4VRpGLnYOjgE0mdgGUk5hXv98rufYR0oGQlTUlrQet9tKiCxx6PxaFOZfoTw9ODiaRSxlQSjT73LkRdBB4SE17crDV/iaP/lbAcekXtcVYGaT13/YAAAAASUVORK5CYII=";

  return (
    <>
      {addList ? (
        <div className="flex bg-slate-200 justify-between  pl-2 pr-2 pt-2 pb-2 rounded w-[16rem]">
          <form className="w-full">
            <input
              type="text"
              className="w-full border-none outline-none p-1 mb-2 rounded"
              onChange={(e) => setListTitle(e.target.value)}
            />

            <div className="flex justify-between">
              <button
                type="submit"
                className="p-1 bg-white shadow rounded mr-4 cursor-pointer pl-3 pr-3"
                onClick={(e) => {
                  submitHendeler(e, bord.id);
                }}
              >
                Add List
              </button>
              <button
                onClick={() => setAddlist(false)}
                type="button"
                className="text-xl text-red-600 cursor-pointer"
              >
                X
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div
          className="flex bg-slate-200 justify-between align-middle text-white pl-2 pr-4  pt-2 pb-2 rounded cursor-pointer"
          onClick={() => setAddlist(true)}
        >
          <h3 className="text-slate-900 text-lg font-medium w-[14rem]">
            Add List
          </h3>
          <img src={plusIcon} alt={"plusIcon"} />
        </div>
      )}
    </>
  );
}
