import GetLocalSorageData from "../../Hooks/GetLocalStoreData";

const initialState = [...GetLocalSorageData()?.list];

const list = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_LIST": {
      return [...state, payload];
    }
    case "EDIT_TITLE": {
      const findItem = state.find((item) => item.id === payload.id);
      findItem.listTitle = payload.title;
      return [...state];
    }
    case "DELET_LIST": {
      return [...state.filter((lists) => lists.id !== payload.id)];
    }
    case "ADD_LiST_TASK_ID": {
      const findItem = state.find((list) => list.id === Number(payload.listId));
      findItem.task = [...findItem.task, Number(payload.taskId)];
      return [...state];
    }
    case "DELETE_LiST_TASK_ID": {
      const findItem = state.find((list) => list.id === payload.listId);
      findItem.task = findItem.task.filter((task) => task !== payload.taskId);
      return [...state];
    }
    case "MOVE_LIST_TASK": {
      const findItem = state.find((list) => list.id === Number(payload.listId));
      findItem.task = [...findItem.task, payload.taskId];
      const presentListItem = state.find(
        (list) => list.id === payload.presentListId
      );
      presentListItem.task = presentListItem.task.filter(
        (task) => task !== payload.taskId
      );

      return [...state];
    }
    case "COPY_LIST_TASK": {
      const findItem = state.find((list) => list.id === Number(payload.listId));
      findItem.task = [...findItem.task, payload.taskId];
      return [...state];
    }

    case "COPY_LIST": {
      const findItem = state.find((list) => list.id === payload.listId);
      const newList = {
        id: payload.newListId,
        listTitle: findItem.listTitle,
        task: findItem.task,
      };
      state.push(newList);
      return [...state];
    }
    case "REMOVE_TASK_ID_FROM_LIST": {
      const list = state.find((item) => item.id === Number(payload.id));
      list.task = list.task.filter((item) => item !== Number(payload.taskId));

      return [...state];
    }

    case "SORT_TASK_ID_IN_LIST": {
      const { targetIndex, sourceIndex, droppableId } = payload;

      const targetList = state.find(
        (taskList) => taskList.id === Number(droppableId)
      );
      const tasks = targetList.task.splice(Number(sourceIndex), 1);
      targetList.task.splice(Number(targetIndex), 0, ...tasks);

      return [...state];
    }

    default:
      return state;
  }
};

export default list;
