import GetLocalSorageData from "../../Hooks/GetLocalStoreData";

const initialState = [...GetLocalSorageData()?.task];

const task = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return [...state, payload];
    case "DELETE_TASK": {
      return [...state.filter((task) => task.id !== payload.id)];
    }

    default:
      return state;
  }
};

export default task;
