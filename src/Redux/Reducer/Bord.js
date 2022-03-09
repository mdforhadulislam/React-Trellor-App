import GetLocalSorageData from "../../Hooks/GetLocalStoreData";

const initialState = [...GetLocalSorageData()?.bord];

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
    case "DELETE_BORD_LIST_ID": {
      const findBord = state.find((bord) => bord.id === action.payload.bordId);
      findBord.list = findBord.list.filter(
        (item) => item !== action.payload.listId
      );
      return [...state];
    }
    case "MOVE_LIST": {
      const findBord = state.find(
        (bords) => bords.id === Number(action.payload.selectedBord)
      );
      findBord.list = [...findBord.list, action.payload.newList];

      const findPrevBord = state.find(
        (bords) => bords.id === action.payload.prevBrodId
      );
      findPrevBord.list = findPrevBord.list.filter(
        (list) => list !== action.payload.prevListId
      );
      return [...state];
    }
    case "COPY_BORD_LIST": {
      const findBord = state.find(
        (bords) => bords.id === Number(action.payload.selectedCopyBord)
      );
      findBord.list = [...findBord.list, action.payload.ListId];
      return [...state];
    }
    case "SORT_LIST_ID_IN_BOARD": {
      const { targetIndex, sourceIndex, droppableId } = action.payload;

      const targetBord = state.find((bord) => bord.id === Number(droppableId));
      const tasks = targetBord.list.splice(sourceIndex, 1);
      targetBord.list.splice(targetIndex, 0, ...tasks);

      return [...state];
    }

    default:
      return state;
  }
};

export default bord;
