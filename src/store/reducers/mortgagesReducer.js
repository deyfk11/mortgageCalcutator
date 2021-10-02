export const mortgagesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_MORTGAGES":
      return action.payload;
    default:
      return state;
  }
};
