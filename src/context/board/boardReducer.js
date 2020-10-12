export default (state, action) => {
  switch (action.type) {
    case "SET_DROPPABLE":
      return {
        ...state,
        droppable: true,
      };
    default:
      return state;
  }
};
