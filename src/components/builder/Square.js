import React, { useContext, useState, useEffect } from "react";
import { useDrop, useDrag } from "react-dnd";

import "./Square.css";
import "./Champion.css";
import boardContext from "../../context/board/boardContext";

const Square = ({ row, column }) => {
  const { droppable, board, handleDropOnSquare, swapSquares } = useContext(
    boardContext
  );
  const [bg, setBg] = useState("bg-gray-800");
  const champion = board[row][column];

  const [, drop] = useDrop({
    accept: "champion",
    drop: ({ champion, origin, originRow, originCol }) => {
      if (origin === "champions") handleDropOnSquare(champion, row, column);
      if (origin === "square") {
        swapSquares(originRow, originCol, row, column);
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: "champion",
      origin: "square",
      originRow: row,
      originCol: column,
      champion,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  useEffect(() => {
    if (droppable) {
      setBg("bg-gray-700");
    } else setBg("bg-gray-800");
  }, [droppable]);

  // const handleDragStart = (e) => {
  //   e.dataTransfer.setData("source", "square");
  //   e.dataTransfer.setData("sourceRow", row);
  //   e.dataTransfer.setData("sourceColumn", column);
  // };

  // const handleDrop = (e) => {
  //   // change the call to have more specific functions calls
  //   handleDropOnSquare(e, row, column);
  // };

  return (
    <div ref={champion && drag}>
      <div
        ref={drop}
        // draggable={!!champion}
        // onDragOver={(e) => {
        //   e.preventDefault();
        //   e.dataTransfer.dropEffect = "copy";
        // }}
        // onDragStart={handleDragStart}
        // onDrop={handleDrop}
        className={`w-10 h-11 sm:w-20 sm:h-22 mr-1 hexagon  flex items-center justify-center ${
          champion ? "cost-" + champion.cost : "bg-gray-900"
        } `}
      >
        <div className={`w-9 h-10 sm:w-18 sm:h-20 hexagon ${bg} object-cover`}>
          {champion && (
            <img
              className="h-full w-full"
              src={`${process.env.REACT_APP_URL_IMG}/img/champions/${champion.championId}.png`}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Square;
