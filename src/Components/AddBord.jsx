import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_bord_action } from "../Redux/Actions/BordActions";

function AddBord() {
  const [bordName, setBordName] = useState("");
  const [bordColor, setBordColor] = useState("");
  const dispatch = useDispatch();

  const add_bord = (e) => {
    e.preventDefault();
    if (bordName !== "") {
      const bord_object = {
        id: Math.round(Date.now() * Math.random()),
        title: bordName,
        bgColor: bordColor,
        list: [],
      };
      dispatch(add_bord_action(bord_object));
      setBordName("");
    } else {
      alert("Please enter a bord name");
    }
  };

  const colorClick = (e) => {
    let allColorButton = e.target.parentNode.children;
    for (let i = 0; i < allColorButton.length; i++) {
      const classList = allColorButton[i].classList;
      for (let i = 0; i < classList.length; i++) {
        if (classList[i] === "border-2" || classList[i] === "border-black") {
          classList.remove("border-2");
          classList.remove("border-black");
          e.target.classList.add("border-2");
          e.target.classList.add("border-black");
        }
        if (classList[i] !== "border-2" || classList[i] !== "border-black") {
          e.target.classList.add("border-2");
          e.target.classList.add("border-black");
        }
      }
    }
  };

  return (
    <div className="add__bord__container p-5">
      <div className="add__bord__container__title pb-3 w-full">
        <h1 className=" text-4xl text-center title">All Bord</h1>
      </div>
      <div className=" rounded shadow-lg w-[25rem] bg-white m-auto ">
        <div className="add__bord__container__form p-3 pb-4 text-center">
          <form>
            <input
              type="text"
              className=" w-full border outline-none p-1 text-[18px] rounded"
              onChange={(e) => setBordName(e.target.value)}
              value={bordName}
            />
            <div className="submit__button__and__color__set flex justify-between pt-3">
              <div className="left flex w-[17rem]">
                <button
                  className="w-[2rem] h-[2rem] bg-red-300 mr-2 rounded shadow"
                  type="button"
                  onClick={(e) => {
                    setBordColor("bg-red-300");
                    colorClick(e);
                  }}
                ></button>
                <button
                  className="w-[2rem] h-[2rem] bg-orange-200 mr-2 rounded shadow"
                  type="button"
                  onClick={(e) => {
                    setBordColor("bg-orange-200");
                    colorClick(e);
                  }}
                ></button>
                <button
                  className="w-[2rem] h-[2rem] bg-pink-200 mr-2 rounded shadow"
                  type="button"
                  onClick={(e) => {
                    setBordColor("bg-pink-200");
                    colorClick(e);
                  }}
                ></button>
                <button
                  className="w-[2rem] h-[2rem] bg-blue-300 mr-2 rounded shadow"
                  type="button"
                  onClick={(e) => {
                    setBordColor("bg-blue-300");
                    colorClick(e);
                  }}
                ></button>
                <button
                  className="w-[2rem] h-[2rem] bg-rose-200 mr-2 rounded shadow"
                  type="button"
                  onClick={(e) => {
                    setBordColor("bg-rose-200");
                    colorClick(e);
                  }}
                ></button>
                <button
                  className="w-[2rem] h-[2rem] bg-purple-300 mr-2 rounded shadow"
                  type="button"
                  onClick={(e) => {
                    setBordColor("bg-purple-300");
                    colorClick(e);
                  }}
                ></button>
              </div>

              <div className="right">
                <button
                  type="submit"
                  className="w-[8rem] bg-sky-500 text-white p-1 font-medium text-[18px] rounded ml-1"
                  onClick={add_bord}
                >
                  Add Bord
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBord;
