const initialState = [];

const bord = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BORD": {
      return [action.payload, ...state];
    }
    case "DELETE_BORD": {
      return [...state.filter((bord) => bord.id !== action.payload)];
    }
    case "ADD_BORD_LIST_ID": {
      return [
        ...state
          .filter((bords) => bords.id === action.payload.bordId)
          .map((bord) => ({
            ...bord,
            list: [...bord.list, action.payload.listId],
          })),
        ...state
          .filter((bords) => bords.id !== action.payload.bordId)
          .map((bord) => ({ ...bord })),
      ];
    }

    default:
      return state;
  }
};

export default bord;
