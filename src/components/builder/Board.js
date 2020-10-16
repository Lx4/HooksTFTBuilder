import React from "react";


import { initEmptyBoard } from "../../helpers/board";
import "./Board.css";

import Square from "./Square";

const Board = () => {
  const board = initEmptyBoard();

  return (
    
      <div className="pl-2">
        {board.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={"flex " + (rowIndex % 2 ? " ml-6" : "")}
          >
            {row.map((undefined, colIndex) => (
              <Square
                key={[rowIndex, colIndex]}
                row={rowIndex}
                column={colIndex}
              />
            ))}
          </div>
        ))}
      </div>
  );
};

export default Board;
