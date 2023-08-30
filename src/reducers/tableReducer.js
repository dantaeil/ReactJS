import { ADD_ENTRY, DELETE_ENTRY } from "../actions/types";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const initialState = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

// Use the initialState as a default value
export default function tableReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  let data;
  switch (action.type) {
    case ADD_ENTRY:
      data = action.payload;
      return [
        ...state,
        createData(
          data.dessert,
          data.calory,
          data.fat,
          data.carbs,
          data.protein
        ),
      ];
    // Do something here based on the different types of actions
    case DELETE_ENTRY:
      data = [...state];
      const exceptdessert = data.filter(myFunction);

      function myFunction(value, index, array) {
        return value.name !== action.payload;
      }
      return exceptdessert;
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
