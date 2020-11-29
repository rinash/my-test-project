/**
 * Redux data reducer.
 * React, React-Route, Redux Test project.
 */

const initialState = {
  item: {
    name: "",
    date: "",
    text: "",
    theme: "light"
  }
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ITEM":
      return { ...state, item: action.payload };
    case "CLEAR_ITEM":
      return { ...initialState };
    default:
      return state;
  }
};
