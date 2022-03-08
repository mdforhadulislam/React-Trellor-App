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
      const findItem = state.find((list) => list.id === payload.listId);
      findItem.task = [...findItem.task, payload.taskId];
      return [...state];
    }
    case "DELETE_LiST_TASK_ID": {
      const findItem = state.find((list) => list.id === payload.listId);
      findItem.task = findItem.task.filter((task) => task !== payload.taskId);
      return [...state];
    }
    case "COPY_LIST": {
      const findItem = state.find((list) => list.id === payload.listId);
      const newList = {
        id: payload.newListId,
        listTitle: findItem.listTitle,
        task: findItem.task,
      };
      return [...state, newList];
    }

    default:
      return state;
  }
};

export default list;
