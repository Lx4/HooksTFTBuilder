export default (state, action) => {
  switch (action.type) {
    case "SET_DROPPABLE":
      return {
        ...state,
        droppable: action.bool,
      };
    default:
      return state;
  }
};
