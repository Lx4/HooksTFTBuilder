export default (state, action) => {
  switch (action.type) {
    case "DROP_CHAMPION":
      // https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
      return {
        ...state,
        board: state.board.map((row, index) => {
          if (index != action.row) {
            return row.slice();
          }
          return row.map((column, i) => {
            if (i != action.column) return column;
            return action.champion;
          });
        }),
      };
    case "SET_DROPPABLE":
      return {
        ...state,
        droppable: action.bool,
      };
    default:
      return state;
  }
};
