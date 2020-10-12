const ROW = 4;
const COLUMN = 7;

export const initEmptyBoard = () => {
  var board = new Array(ROW).fill(null);
  for (let i = 0; i < ROW; i++) {
    board[i] = new Array(COLUMN).fill(null);
  }
  return board;
};
