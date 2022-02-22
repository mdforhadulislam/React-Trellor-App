const initialState = [];

const task = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return [...state, payload];

    default:
      return state;
  }
};

export default task;
