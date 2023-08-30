import { ADD_ENTRY, DELETE_ENTRY } from "./types";

export const addEntry = (data) => (dispatch) => {
  const action = {
    type: ADD_ENTRY,
    payload: data,
  };
  dispatch(action);
};

export const deleteEntry = (dessert) => (dispatch) => {
  const action = {
    type: DELETE_ENTRY,
    payload: dessert,
  };
  dispatch(action);
};
