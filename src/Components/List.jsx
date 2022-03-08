import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import BackIcon from "../icon/backIcon.svg";
import AddList from "./AddList";
import ListItem from "./ListItem";

function List() {
  const { bordId } = useParams();
  const allBords = useSelector((state) => state.bord);
  const allList = useSelector((state) => state.list);

  return (
    <>
      {allBords
        ?.filter((bord) => bord.id === Number(bordId))
        ?.map((bord) => {
          return (
            <div
              key={bord.id}
              className={[bord.bgColor, " overflow-auto"].join(" ")}
              style={
                bord.list.length >= 4
                  ? { width: `${bord.list.length * 23.8}rem` }
                  : { width: "100%" }
              }
            >
              <div
                className=" bg-gray-100 pl-6"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <div className="w-[2rem]">
                  <Link to={"/"}>
                    <img
                      className="w-[2rem] cursor-pointer"
                      src={BackIcon}
                      alt="BackIcon"
                    />
                  </Link>
                </div>
                <div className="w-full">
                  <h1 className="text-center p-2 text-2xl font-semibold uppercase ">
                    bord name {bord.title}
                  </h1>
                </div>
              </div>

              <div
                className={[bord.bgColor, "w-full h-screen p-5"].join(" ")}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                {bord?.list?.length <= 0
                  ? ""
                  : allList
                      ?.filter((list) =>
                        bord?.list?.find((item) => list.id === item)
                      )
                      ?.map((singlelist) => {
                        return (
                          <ListItem
                            key={singlelist.id}
                            id={singlelist.id}
                            title={singlelist.listTitle}
                            task={singlelist.task}
                            bordId={bord.id}
                          />
                        );
                      })}
                <div className="w-[17rem] h-auto p-2 bg-white rounded shadow-md inline-block m-3">
                  <AddList bord={bord} />
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default List;
