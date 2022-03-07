const initialState = [];

const bord = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BORD": {
      return [action.payload, ...state];
    }
    case "EDIT_BORD_NAME": {
      const findBord = state.find((bord) => bord.id === action.payload.bordId);
      findBord.title = action.payload.title;
      return [...state];
    }
    case "DELETE_BORD": {
      return [...state.filter((bord) => bord.id !== action.payload)];
    }
    case "ADD_BORD_LIST_ID": {
      const findBord = state.find((bord) => bord.id === action.payload.bordId);
      findBord.list = [...findBord.list, action.payload.listId];

      return [...state];
    }

    default:
      return state;
  }
};

export default bord;
