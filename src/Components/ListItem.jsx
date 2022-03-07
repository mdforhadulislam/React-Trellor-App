import React from "react";
import { useSelector } from "react-redux";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";

function ListItem({ id, title, task }) {
  const allTask = useSelector((state) => state.task);

  const threeDot =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAG9JREFUSEtjZKAxYKSx+QwjywIHBgaG+dAgTWRgYDhATPCSEkQPGBgY5KGGgtiK1LbgAwMDAz/U0IcMDAwK1LYAFEQLoIYm0CKIiHEwhhpS4oDmFoymIoJBPJqKiAqi0bIIbzCNpiKCqYgsBTQvTQFNkxgZM6/25AAAAABJRU5ErkJggg==";

  return (
    <div className="w-[17rem] h-auto p-2 bg-white rounded shadow-md inline-block m-3">
      <div className=" bg-slate-200 pl-2 pr-4  pt-2 pb-2 rounded">
        <div className="flex  justify-between align-middle ">
          <h1 className="text-slate-900 text-lg font-medium">{title}</h1>
          <img className=" cursor-pointer" src={threeDot} alt={"threeDot"} />
        </div>
        {allTask
          .filter((fullTask) => {
            return task.filter((item) => item === fullTask.id) > 0;
          })
          .map((items) => {
            return <TaskItem key={items.id} task={items} listId={id} />;
          })}
      </div>
      <AddTask listId={id} />
    </div>
  );
}

export default ListItem;
