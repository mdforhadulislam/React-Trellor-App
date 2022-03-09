import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import AddTask from "./AddTask";
import CopyListItem from "./CopyListItem";
import EditListItem from "./EditListItem";
import MoveListItem from "./MoveListItem";
import OptionListItem from "./OptionListItem";
import TaskItem from "./TaskItem";

function ListItem({ id, title, task, bordId, index }) {
  const [isOption, setIsOption] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isMove, setIsMove] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const [eidtValue, setEditValue] = useState("");

  const allTask = useSelector((state) => state.task);
  const allBord = useSelector((state) => state.bord);

  const threeDot =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAG9JREFUSEtjZKAxYKSx+QwjywIHBgaG+dAgTWRgYDhATPCSEkQPGBgY5KGGgtiK1LbgAwMDAz/U0IcMDAwK1LYAFEQLoIYm0CKIiHEwhhpS4oDmFoymIoJBPJqKiAqi0bIIbzCNpiKCqYgsBTQvTQFNkxgZM6/25AAAAABJRU5ErkJggg==";

  const handlerDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(result);
  };

  return (
    <Draggable draggableId={`${id}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="w-[17rem] h-auto p-2 bg-white rounded shadow-md inline-block m-3"
        >
          <div className=" bg-slate-200 pl-2 pr-4  pt-2 pb-2 rounded">
            <div className="flex  justify-between align-middle relative ">
              <h1 className="text-slate-900 text-lg font-medium w-[14rem]">
                {title}
              </h1>
              <img
                onClick={() => {
                  setIsOption(!isOption);
                }}
                className=" cursor-pointer z-20"
                src={threeDot}
                alt={"threeDot"}
              />
              {isOption && (
                <OptionListItem
                  setIsOption={setIsOption}
                  setIsEdit={setIsEdit}
                  setEditValue={setEditValue}
                  setIsMove={setIsMove}
                  setIsCopy={setIsCopy}
                  listTitle={title}
                  id={id}
                  bordId={bordId}
                />
              )}
              {isEdit && (
                <EditListItem
                  eidtValue={eidtValue}
                  setEditValue={setEditValue}
                  setIsEdit={setIsEdit}
                  id={id}
                />
              )}
              {isMove && (
                <MoveListItem
                  id={id}
                  bordId={bordId}
                  setIsMove={setIsMove}
                  allBord={allBord}
                />
              )}
              {isCopy && (
                <CopyListItem setIsCopy={setIsCopy} id={id} allBord={allBord} />
              )}
            </div>

            <DragDropContext onDragEnd={handlerDragEnd}>
              <Droppable droppableId={`${id}`}>
                {(provided) => (
                  <span ref={provided.innerRef} {...provided.droppableProps}>
                    {task
                      ?.map((item) => {
                        return allTask?.find((task) => task.id === item);
                      })
                      ?.map((items, index) => {
                        if (items === undefined) {
                          return "";
                        } else {
                          return (
                            <TaskItem
                              key={items.id}
                              task={items}
                              listId={id}
                              index={index}
                            />
                          );
                        }
                      })}
                    {provided.placeholder}
                  </span>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <AddTask listId={id} />
        </div>
      )}
    </Draggable>
  );
}

export default ListItem;
