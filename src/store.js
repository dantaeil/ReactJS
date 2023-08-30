import { createStore } from "redux";
import tableReducer from "./reducers/tableReducer";

const store = createStore(tableReducer);

export default store;
