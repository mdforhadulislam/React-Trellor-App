import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
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

  return (
    <Droppable droppableId={`${id}`}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="w-[21rem] h-auto p-2 bg-white rounded shadow-md inline-block m-3 relative"
        >
          <div className=" bg-slate-200 pl-2 pr-0  pt-2 pb-2 rounded  max-h-[21rem] scrollBar overflow-auto ">
            {isEdit ? (
              <EditListItem
                eidtValue={eidtValue}
                setEditValue={setEditValue}
                setIsEdit={setIsEdit}
                id={id}
              />
            ) : isMove ? (
              <MoveListItem
                id={id}
                bordId={bordId}
                setIsMove={setIsMove}
                allBord={allBord}
              />
            ) : isCopy ? (
              <CopyListItem setIsCopy={setIsCopy} id={id} allBord={allBord} />
            ) : (
              <div className="flex  justify-between w-[19rem]  align-middle">
                <h1 className="text-slate-900 text-lg font-medium w-[16rem] break-words">
                  {title}
                </h1>
                <img
                  onClick={() => {
                    setIsOption(!isOption);
                  }}
                  className=" cursor-pointer z-20 h-full"
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
              </div>
            )}

            <div>
              {task
                ?.map((item) => {
                  return allTask?.find((task) => task.id === item);
                })
                ?.map((items, index) =>
                  items === undefined ? (
                    ""
                  ) : (
                    <TaskItem
                      key={items.id}
                      task={items}
                      listId={id}
                      index={index}
                    />
                  )
                )}
              {provided.placeholder}
            </div>
          </div>

          <AddTask listId={id} />
        </div>
      )}
    </Droppable>
  );
}

export default ListItem;
