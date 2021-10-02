export const actionGetMortgages = (mortgages) => {
  return {
    type: "GET_MORTGAGES",
    payload: mortgages,
  };
};
