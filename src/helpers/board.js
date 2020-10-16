const ROW = 4;
const COLUMN = 7;

export const initEmptyBoard = () => {
  var board = new Array(ROW).fill(null);
  for (let i = 0; i < ROW; i++) {
    board[i] = new Array(COLUMN).fill(null);
  }
  return board;
};

export const findFirstEmptySquare = (board) => {
  for (let row = 0; row < ROW; row++) {
    for (let col = 0; col < COLUMN; col++) {
      if (board[row][col] === null) return [row, col];
    }
  }
  return [-1, -1];
};
