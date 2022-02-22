import { createStore } from "redux";
import manageState from "./Reducer";

const store = createStore(manageState);
export default store;
