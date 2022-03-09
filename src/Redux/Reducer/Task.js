import GetLocalSorageData from "../../Hooks/GetLocalStoreData";

const initialState = [...GetLocalSorageData()?.task];

const task = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TASK": {
      return [...state, payload];
    }
    case "DELETE_TASK": {
      return [...state.filter((task) => task.id !== payload.id)];
    }
    case "EDIT_TASK": {
      const findTask = state.find((task) => task.id === payload.id);
      findTask.taskTitle = payload.title;
      return [...state];
    }
    case "COPY_TASK": {
      const findTask = state.find((task) => task.id === payload.id);
      const newTask = {
        id: payload.newTaskId,
        taskTitle: findTask.taskTitle,
      };
      return [...state, newTask];
    }

    default:
      return state;
  }
};

export default task;
