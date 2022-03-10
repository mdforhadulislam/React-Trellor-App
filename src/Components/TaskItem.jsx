import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import CopyTaskItem from "./CopyTaskItem";
import EditTaskItem from "./EditTaskItem";
import MoveTaskItem from "./MoveTaskItem";
import OptionTaskItem from "./OptionTaskItem";

function TaskItem({ task, listId, index }) {
  const [isOption, setIsOption] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isMove, setIsMove] = useState(false);
  const [isCopy, setIsCopy] = useState(false);

  const allList = useSelector((state) => state.list);
  const allBoard = useSelector((state) => state.bord);

  const threeDot =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAG9JREFUSEtjZKAxYKSx+QwjywIHBgaG+dAgTWRgYDhATPCSEkQPGBgY5KGGgtiK1LbgAwMDAz/U0IcMDAwK1LYAFEQLoIYm0CKIiHEwhhpS4oDmFoymIoJBPJqKiAqi0bIIbzCNpiKCqYgsBTQvTQFNkxgZM6/25AAAAABJRU5ErkJggg==";

  return (
    <Draggable draggableId={`${task.id}`} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          {isEdit ? (
            <EditTaskItem task={task} setIsEdit={setIsEdit} />
          ) : isMove ? (
            <MoveTaskItem
              allBoard={allBoard}
              allList={allList}
              task={task}
              listId={listId}
              setIsMove={setIsMove}
            />
          ) : isCopy ? (
            <CopyTaskItem
              allBoard={allBoard}
              allList={allList}
              setIsCopy={setIsCopy}
              task={task}
            />
          ) : (
            <div className="flex p-2  m-2 mr-2 bg-white rounded justify-between align-middle">
              <div className="w-[11rem] h-auto relative">
                <p className="break-words text-lg">{task.taskTitle}</p>
              </div>
              <div className="w-[1.3rem] h-auto cursor-pointer relative">
                <img
                  className="z-0"
                  src={threeDot}
                  alt="ThreeDotIcon"
                  onClick={() => {
                    setIsOption(!isOption);
                  }}
                />
                {isOption && (
                  <OptionTaskItem
                    setIsCopy={setIsCopy}
                    setIsEdit={setIsEdit}
                    setIsMove={setIsMove}
                    setIsOption={setIsOption}
                    listId={listId}
                    task={task}
                  />
                )}

                {/*  */}
              </div>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
}

export default TaskItem;
