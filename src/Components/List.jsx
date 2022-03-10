import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import BackIcon from "../icon/backIcon.svg";
import {
  add_list_task_id_action,
  remove_task_id_from_list,
  sort_task_in_list,
} from "../Redux/Actions/ListAction";
import AddList from "./AddList";
import ListItem from "./ListItem";

function List() {
  const { bordId } = useParams();
  const allBords = useSelector((state) => state.bord);
  const allList = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const alldata = useSelector((state) => state);
  useEffect(() => {
    localStorage.setItem("manageState", JSON.stringify(alldata));
  }, [alldata]);

  const onDragEndHendler = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId !== source.droppableId) {
      dispatch(
        add_list_task_id_action({
          listId: destination.droppableId,
          taskId: draggableId,
        })
      );
      dispatch(
        remove_task_id_from_list({
          id: source.droppableId,
          taskId: draggableId,
        })
      );
    } else if (destination.droppableId === source.droppableId) {
      dispatch(
        sort_task_in_list({
          targetIndex: destination.index,
          sourceIndex: source.index,
          droppableId: source.droppableId,
        })
      );
    }
  };

  return (
    <>
      {allBords
        ?.filter((bord) => bord.id === Number(bordId))
        ?.map((bord) => (
          <div
            key={bord.id}
            className={[bord.bgColor, " overflow-auto"].join(" ")}
            style={
              bord.list.length >= 4
                ? { width: `${bord.list.length * 29}rem` }
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
            <DragDropContext onDragEnd={onDragEndHendler}>
              <div
                className={[bord.bgColor, "w-full h-[89vh] p-5"].join(" ")}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                {bord?.list?.length <= 0
                  ? ""
                  : bord?.list
                      ?.map((list) => {
                        return allList.find((item) => item.id === list);
                      })
                      ?.map((singlelist, index) => (
                        <ListItem
                          key={singlelist.id}
                          id={singlelist.id}
                          title={singlelist.listTitle}
                          task={singlelist.task}
                          bordId={bord.id}
                          index={index}
                        />
                      ))}
                <div className="w-[21rem] h-auto p-2 bg-white rounded shadow-md inline-block m-3">
                  <AddList bord={bord} />
                </div>
              </div>
            </DragDropContext>
          </div>
        ))}
    </>
  );
}

export default List;
