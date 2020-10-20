import React from "react";

import { initEmptyBoard } from "../../helpers/board";
import "./Board.css";

import Square from "./Square";

const Board = () => {
  const board = initEmptyBoard();

  return (
    <div className="text-center">
      {board.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={"inline-flex " + (rowIndex % 2 ? "ml-4" : "-ml-4")}
        >
          {
            // eslint-disable-next-line
            row.map((undefined, colIndex) => (
              <Square
                key={[rowIndex, colIndex]}
                row={rowIndex}
                column={colIndex}
              />
            ))
          }
        </div>
      ))}
    </div>
  );
};

export default Board;
