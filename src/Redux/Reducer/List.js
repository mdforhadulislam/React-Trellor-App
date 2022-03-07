const initialState = [];

const list = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_LIST": {
      return [...state, payload];
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

    default:
      return state;
  }
};

export default list;
