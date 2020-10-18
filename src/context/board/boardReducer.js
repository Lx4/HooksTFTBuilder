export default (state, action) => {
  switch (action.type) {
    case "ADD_CHAMPION":
      // https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
      return {
        ...state,
        board: state.board.map((row, index) => {
          if (index !== action.row) {
            return row.slice();
          }
          return row.map((column, i) => {
            if (i !== action.column) return column;
            return action.champion;
          });
        }),
      };
    case "SWAP_SQUARES":
      let board = state.board.map((row) => {
        return row.map((column) => column);
      });
      let temp = board[action.targetRow][action.targetCol];
      board[action.targetRow][action.targetCol] =
        board[action.originRow][action.originCol];
      board[action.originRow][action.originCol] = temp;
      return { ...state, board };
    case "SET_DROPPABLE":
      switch (action.target) {
        case "board":
          return {
            ...state,
            boardDroppable: action.bool,
          };
        case "champions":
          return {
            ...state,
            championsDroppable: action.bool,
          };
        case "items":
          return {
            ...state,
            itemsDroppable: action.bool,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
