import { combineReducers } from "redux";
import bord from "./Bord";
import list from "./List";
import task from "./Task";

const manageState = combineReducers({
  bord,
  list,
  task,
});

export default manageState;
