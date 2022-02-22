const initialState = [];

const list = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_LIST": {
      return [...state, payload];
    }
    case "ADD_LiST_TASK_ID": {
      return [
        ...state
          .filter((list) => list.id === payload.listId)
          .map((item) => ({ ...item, task: [...item.task, payload.taskId] })),
        ...state
          .filter((list) => list.id !== payload.listId)
          .map((item) => ({ ...item })),
      ];
    }

    default:
      return state;
  }
};

export default list;
